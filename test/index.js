'use strict';

var assert = require('assert');
var fs = require('fs');
var mkdirp = require('mkdirp').sync;
var Promise = require('promise');
var throat = require('throat');
var link = require('../lib/link');
var Scope = require('../lib/scope');
var Environment = require('../lib/environment.js');
var Function = require('../lib/types/function');
var evaluate = require('../lib/evaluate');

mkdirp(__dirname + '/build');
fs.readdirSync(__dirname + '/cases').forEach(throat(1, function (testCase) {
  if (/\.js$/.test(testCase)) {
    console.log('/test/cases/' + testCase);
    var build = link.linkSync(__dirname + '/cases/' + testCase, {builtins: ['assert']});
    fs.writeFileSync(__dirname + '/build/' + testCase, JSON.stringify(build, null, '  '));
    // TEST ASYNC
    var called = false;
    var done = evaluate(build, new Scope([{
      '!finish': {
        kind: 'const',
        value: new Function(function (self, args) {
          assert(called === false, 'Finish should only be called once');
          assert(self === undefined, 'Self should be undefined');
          assert(args.length === 1, 'Finish should be called with one argument');
          assert(args[0].type === 'number' && args[0].value === 42, 'Finish should be called with 42');
          called = true;
        })
      }
    }]), new Environment(build, {}, function (scope, environment) {
      return Promise.resolve(null);
    })).then(function () {
      if (!called) {
        throw new Error('Finish was never called');
      }
      // TEST SYNC
      called = false;
      evaluate(build, new Scope([{
        '!finish': {
          kind: 'const',
          value: new Function(function (self, args) {
            assert(called === false, 'Finish should only be called once');
            assert(self === undefined, 'Self should be undefined');
            assert(args.length === 1, 'Finish should be called with one argument');
            assert(args[0].type === 'number' && args[0].value === 42, 'Finish should be called with 42');
            called = true;
          })
        }
      }]), new Environment(build, {}, function (scope, environment) {  }));
      if (!called) {
        throw new Error('Finish was never called');
      }
    });
    done.done();
    return done;
  }
}));
