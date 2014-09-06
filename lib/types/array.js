'use strict';

module.exports = Array;
function Array(elements) {
  this.type = 'array';
  this.elements = elements;
  this.properties = {};
}
Array.prototype.getProperty = function (name) {
  if (name === 'length') return this.elements.length;
  else if (typeof name === 'number' || (typeof name === 'string' && /^\d+$/.test(name))) return this.elements[name];
  else return this.properties['!' + name];
};
Array.prototype.setProperty = function (name, value) {
  if (name === 'length') return;
  else if (typeof name === 'number' || (typeof name === 'string' && /^\d+$/.test(name))) return this.elements[name] = value;
  else return this.properties['!' + name] = value;
};
Array.prototype.getIterator = function () {
  var i = 0, elements = this.elements;
  return {
    next: function () {
      if (i < elements.length) return {value: elements[i++], done: false};
      else if (i === elements.length) return {value: undefined, done: true};
      else throw new Error('End of iteration.');
    }
  };
};
