/** @jsx React.DOM */
var React = require("react")
var GridSizeMixin = require('./mixins/GridSizeMixin');

module.exports = React.createClass({
  mixins: [GridSizeMixin],
  propTypes: {},
  render: function () {
    var classes = this.getColSpanClasses();

    return (
      <div className={classes.join(" ")}>
        {this.props.children}
      </div>
    );
  }
});

