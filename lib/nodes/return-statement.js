'use strict';

var Return = require('../types/return');

module.exports = function (node, scope, environment, utils) {
  return new Return(node.argument, scope, environment);
};
