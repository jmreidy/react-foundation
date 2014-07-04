var React = require('react');

var generateColClass = function (component, props, prefix) {
  var count, klass;
  for (var i = 0; i < props.length; i++) {
    count = component.props[props[i]];
    if (count) {
      klass = prefix+'-'+count;
      break;
    }
  }
  return klass;
};

var GridSizeMixin = {
  propTypes: {
    colSpan: React.PropTypes.number,
    smColSpan: React.PropTypes.number,
    mdColSpan: React.PropTypes.number,
    lgColSpan: React.PropTypes.number
  },
  getColSpanClasses: function () {
    var classes = [];
    classes.push(generateColClass(this, ['colSpan', 'smColSpan'], 'small'));
    classes.push(generateColClass(this, ['mdColSpan'], 'medium'));
    classes.push(generateColClass(this, ['lgColSpan'], 'large'));
    return classes.filter(function (k) { return k !== undefined; }).join(' ') + ' columns';
  }
};

module.exports = GridSizeMixin;
