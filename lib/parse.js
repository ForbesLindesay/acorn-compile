'use strict';

var acorn = require('acorn');

module.exports = parse;
function parse(source) {
  return acorn.parse(source, {ecmaVersion: 6});
}
