'use strict';

module.exports = String;
function String(value) {
  this.type = 'string';
  this.value = value;
}
