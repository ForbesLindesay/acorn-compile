'use strict';

var assert = require('assert');
var Function = require('../types/function.js');

module.exports = new Function(function (self, args) {
  if (args.length === 2)
    assert(args[0] && args[0].value, args[1].value);
  else
    assert(args[0] && args[0].value);
});
