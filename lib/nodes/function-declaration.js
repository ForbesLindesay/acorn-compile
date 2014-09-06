'use strict';

var Function = require('../types/function');

module.exports = function (node, scope, environment, utils) {
  var name = node.id.name;
  var fn = new Function(function (self, args) {
    var f = fn;
    var childScope = scope.getChildScope();
    node.params.forEach(function (param, i) {
      childScope.define('let', param.name, args[i]);
    });
    return utils.when(utils.evaluateNode(node.body, childScope, environment), function (result) {
      if (result && result.type === 'return') {
        return utils.evaluateNode(result.node, result.scope, result.modules);
      } else if (result && result.bubbles) {
        return result;
      } else {
        return;
      }
    });
  });
  scope.define('let', name, fn);
};
