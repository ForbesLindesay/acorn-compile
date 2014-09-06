'use strict';

module.exports = function (node, scope, environment, utils) {
  function gotCallee(self, callee) {
    return utils.when(utils.evaluateArray(node.arguments, scope, environment), function (args) {
      return callee.value(self, args, scope, environment);
    });
  }
  // todo: handle setting self
  return utils.when(utils.evaluateNode(node.callee, scope, environment), function (callee) {
    return gotCallee(undefined, callee);
  });
};
