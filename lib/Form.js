/** @jsx React.DOM */
var React = require("react");

var Form = React.createClass({

  render: function () {
    return (
      <form>
        {this.props.children}
      </form>
  }
});

module.exports = Form;
