'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateNode(node.test, scope, environment), function (value) {
    return utils.evaluateNode(value && value.value ? node.consequent : node.alternate, scope, environment);
  });
};
