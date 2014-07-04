/** @jsx React.DOM */
var React = require("react");
var Addons  = require("react/addons").addons;

module.exports = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['tiny', 'small', 'large']),
    color: React.PropTypes.oneOf(['secondary', 'success', 'alert']),
    radius: React.PropTypes.oneOf(['radius', 'round']),
    position: React.PropTypes.oneOf(['left', 'right']),
    expand: React.PropTypes.bool,
    enabled: React.PropTypes.bool
  },
  render: function () {
    var classes = {
      'button': true,
      'disabled': (this.props.enabled !== true),
    }
    classes[this.props.size] = this.props.size;
    classes[this.props.radius] = this.props.radius;
    classes[this.props.color] = this.props.color;
    classes[this.props.position] = this.props.position;

    var classSet = Addons.classSet(classes);

    return this.transferPropsTo(
      <button type="submit" className={classSet}>
        {this.props.children}
      </button>
    );
  }
})
