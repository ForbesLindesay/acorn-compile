'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.evaluateNode(node.expression, scope, environment);
};
