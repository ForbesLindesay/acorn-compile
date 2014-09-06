'use strict';

var Number = require('../types/number');
var String = require('../types/string');
var Boolean = require('../types/boolean');

module.exports = function (node, scope, environment, utils) {
  switch (typeof node.value) {
    case 'number':
      return new Number(node.value);
    case 'string':
      return new String(node.value);
    case 'boolean':
      return new Boolean(node.value);
    default:
      throw new Error('Unknown literal type ' + (typeof node.value));
  }
};
