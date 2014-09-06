'use strict';

var util = require('util');
var assert = require('assert');
var fs = require('fs');
var Promise = require('promise');
var Environment = require('./environment.js');
var Scope = require('./scope.js');

var nodeEvaluators = {};
fs.readdirSync(__dirname + '/nodes').forEach(function (nodeType) {
  nodeEvaluators[nodeType.replace(/(^|\-)([a-z])/g, function (_, a, b) {
    return b.toUpperCase();
  }).replace(/\.js$/, '')] = require('./nodes/' + nodeType);
});

var utils = {
  evaluateNode: evaluateNode,
  evaluateArray: evaluateArray,
  isPromise: isPromise,
  when: when
};

module.exports = evaluateProgram;
function evaluateProgram(ast, state, environment) {
  return evaluateNode(ast[0], state || new Scope({}), environment || new Environment(ast, {}));
}
function evaluateNode(ast, scope, environment) {
  return when(environment.onDebug(scope, environment), function () {
    if (ast === undefined) return undefined;
    if (ast === null) return undefined;
    if (ast.type in nodeEvaluators) return nodeEvaluators[ast.type](ast, scope, environment, utils);
    else throw new Error('Unexpected token type ' + JSON.stringify(ast.type) + '\n' + util.inspect(ast));
  });
}
function evaluateArray(commands, scope, environment) {
  var i = 0;
  var result = [];
  var done = false;
  function next() {
    var ready = true;
    while (i < commands.length && ready) {
      var value = evaluateNode(commands[i++], scope, environment);
      if (isPromise(value)) {
        ready = false;
        value.done(function (value) {
          if (value && value.bubbles) {
            result = value;
            i = commands.length;
            return next();
          }
          result.push(value);
          next();
        });
      } else {
        if (value && value.bubbles) {
          result = value;
          i = commands.length;
          return next();
        }
        result.push(value);
      }
    }
    if (ready) {
      if (done === false) done = true;
      else done(result);
    }
  }
  next();
  if (done) {
    return result;
  } else {
    return new Promise(function (resolve) {
      done = resolve;
    });
  }
  return i === commands.length;
}

function isPromise(value) {
  return value &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof value.then === 'function';
}
function when(value, gotValue) {
  if (isPromise(value)) {
    return value.then(gotValue);
  } else {
    return gotValue(value);
  }
}
