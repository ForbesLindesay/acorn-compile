'use strict';

module.exports = function (node, scope, environment, utils) {
  var mod = environment.getModule(node.source);
  if (node.kind === 'default') {
    var specifier = node.specifiers[0];
    scope.define('const', specifier.id.name, mod);
  } else if (node.kind === 'named') {
    throw new Error('Named import is not yet supported');
  }
};
