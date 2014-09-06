'use strict';

module.exports = Function;
function Function(value) {
  this.type = 'function';
  this.value = value;
}
