'use strict';

module.exports = Return;
function Return(node, scope, modules) {
  this.type = 'return';
  this.bubbles = true;
  this.node = node;
  this.scope = scope;
  this.modules = modules;
}
