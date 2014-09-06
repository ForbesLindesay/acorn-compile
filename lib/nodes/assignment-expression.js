'use strict';

module.exports = function (node, scope, environment, utils) {
  function assignResult(value) {
    if (node.left.type === 'Identifier') {
      scope.assign(node.left.name, value);
    } else if (node.left.type = 'MemberExpression') {
      if (node.left.computed) {
        return utils.when(utils.evaluateArray([node.left.object, node.left.property], scope, environment), function (results) {
          if (results[1] && (results[1].type === 'string' || results[1].type === 'number')) {
            return results[0].setProperty(results[1].value, value);
          }
        });
      }
    } else {
      throw new Error('Invalid left hand side of assignment ' + node.left.type);
    }
  }
  return utils.when(utils.evaluateNode(node.right, scope, environment), function (value) {
    switch (node.operator) {
      case '=':
        assignResult(value);
        return value;
      default:
        throw new Error('Unexpected operator ' + node.operator);
    }
  });
};
