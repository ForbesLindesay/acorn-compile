'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.evaluateArray(node.body, scope, environment);
};
