'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateNode(node.right, scope, environment), function (list) {
    var iterator = list.getIterator();
    function next() {
      return utils.when(iterator.next(), function (element) {
        if (element.done) return;
        var childScope = scope.getChildScope();
        if (node.left.type === 'VariableDeclaration') {
          var name = node.left.declarations[0].id.name;
          childScope.define(node.left.kind, name, element.value);
        } else {
          throw new Error(node.left.type + ' not supported as part of for of yet.');
        }
        return utils.when(utils.evaluateNode(node.body, childScope, environment), next);
      });
    }
    return next();
  });
};
