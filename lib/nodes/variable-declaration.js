'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateArray(node.declarations.map(function (declaration) {
    return declaration.init || undefined;
  }), scope, environment), function (init) {
    for (var i = 0; i < node.declarations.length; i++) {
      scope.define(node.kind, node.declarations[i].id.name, init[i]);
    }
  });
};
