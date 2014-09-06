'use strict';

var Array = require('../types/array');

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateArray(node.elements, scope, environment), function (elements) {
    return new Array(elements);
  });
};
