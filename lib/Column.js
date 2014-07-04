/** @jsx React.DOM */
var React = require("react")
var GridSizeMixin = require('./mixins/GridSizeMixin');

module.exports = React.createClass({
  mixins: [GridSizeMixin],
  propTypes: {
    centered: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.oneOf(['small', 'medium', 'large']),
      React.PropTypes.array
    ])
  },
  render: function () {
    var classes = this.getColSpanClasses();

    var centered = this.props.centered;
    if (centered) {
      if (typeof centered === 'boolean') {
        centered = 'small';
        classes = centered+'-'+'centered ' + classes;
      }
      else if (typeof centered === 'object') {
        centered.forEach(function (col) {
          classes = col+'-'+'centered ' + classes;
        });
      }
      else {
        classes = centered+'-'+'centered ' + classes;
      }
    }

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});

