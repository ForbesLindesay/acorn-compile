'use strict';

module.exports = Scope;
function Scope(contexts) {
  this.contexts = contexts.concat({});
}
Scope.prototype.getValue = function (name) {
  for (var i = this.contexts.length - 1; i >= 0; i--) {
    if (this.contexts[i]['!' + name]) {
      return this.contexts[i]['!' + name].value;
    }
  }
  console.dir(this.contexts);
  throw new Error('Reference Error: ' + name);
};
Scope.prototype.define = function (kind, name, value) {
  if (this.contexts[this.contexts.length - 1]['!' + name] &&
      (kind !== 'var' || this.contexts[this.contexts.length - 1]['!' + name].kind === 'var')) {
    throw new Error('Multiple declarations for ' + name);
  } else {
    this.contexts[this.contexts.length - 1]['!' + name] = {
      kind: kind,
      value: value
    };
  }
};
Scope.prototype.assign = function (name, value) {
  for (var i = this.contexts.length - 1; i >= 0; i--) {
    if (this.contexts[i]['!' + name]) {
      if (this.contexts[i]['!' + name].kind === 'const') {
        throw new Error('Cannot modify the value of a constant');
      }
      this.contexts[i]['!' + name].value = value;
    }
  }
};

Scope.prototype.getChildScope = function () {
  return new Scope(this.contexts);
};
