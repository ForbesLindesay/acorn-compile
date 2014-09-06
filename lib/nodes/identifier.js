'use strict';

module.exports = function (node, scope, environment, utils) {
  return scope.getValue(node.name);
};
