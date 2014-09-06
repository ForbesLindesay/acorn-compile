'use strict';

var assert = require('assert');
var Number = require('../types/number');
var String = require('../types/string');
var Boolean = require('../types/boolean');

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateArray([node.left, node.right], scope, environment), function (nodes) {
    switch (node.operator) {
      case '+':
        assert(nodes[0] && nodes[1], 'Cannot add null or undefined');
        assert(nodes[0].type === 'string' || nodes[0].type === 'number', 'Can only add numbers and strings.');
        assert(nodes[1].type === 'string' || nodes[1].type === 'number', 'Can only add numbers and strings.');
        var result = nodes[0].value + nodes[1].value;
        if (typeof result === 'number') {
          return new Number(result);
        } else if (typeof result === 'string') {
          return new String(result);
        } else {
          throw new Error('Invalid types for addition');
        }
      case '===':
        return new Boolean((nodes[0] && nodes[0].value) === (nodes[1] && nodes[1].value));
      case '%':
        assert(nodes[0] && nodes[1], 'Can only apply ' + node.operator + ' to numbers.');
        assert(nodes[0].type === 'number', 'Can only apply ' + node.operator + ' to numbers.');
        assert(nodes[1].type === 'number', 'Can only apply ' + node.operator + ' to numbers.');
        return new Number(nodes[0].value % nodes[1].value);
      default:
        throw new Error('Unexpected operator ' + node.operator);
    }
  });
};
