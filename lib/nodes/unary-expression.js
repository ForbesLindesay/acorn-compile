'use strict';

var assert = require('assert');
var Number = require('../types/number');
var String = require('../types/string');

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateNode(node.argument, scope, environment), function (argument) {
    switch (node.operator) {
      case '+':
        var result = +argument.value;
        if (typeof result === 'number') {
          return new Number(result);
        } else {
          throw new Error('Invalid types for + unary operator');
        }
      default:
        throw new Error('Unexpected operator ' + node.operator);
    }
  });
};
