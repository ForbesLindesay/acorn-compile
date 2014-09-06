'use strict';

module.exports = Environment;
function Environment(modules, builtins, onDebug) {
  this._modules = modules;
  this._builtins = builtins;
  this._loaded = {};
  this.onDebug = onDebug;
}
Environment.prototype.getModule = function (id) {
  if (('!' + id) in this._loaded) {
    return this._loaded['!' + id];
  }
  return this._loaded['!' + id] = require('./builtins/' + id);
};
