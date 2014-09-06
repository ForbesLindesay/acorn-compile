'use strict';

module.exports = function (node, scope, environment, utils) {
  return utils.when(utils.evaluateNode(node.object, scope, environment), function (obj) {
    if (node.computed) {
      return utils.when(utils.evaluateNode(node.property, scope, environment), function (property) {
        if (property && (property.type === 'string' || property.type === 'number')) {
          return obj.getProperty(property.value);
        }
      });
    } else {
      throw new Error('Not Implemented');
    }
  });
};
