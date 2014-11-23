/** @jsx React.DOM */

'use strict';

/**
 * Module dependencies.
 */

var _ = require('lodash');
var Slider = require('bootstrap-slider');

/**
 * Create and export the Slider component.
 *
 * @see https://github.com/seiyria/bootstrap-slider
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    var options = _(this.props).pick('min', 'max', 'step', 'precision',
      'value', 'range', 'selection', 'tooltip', 'tooltipSeparator',
      'tooltipSplit', 'handle', 'reversed', 'enabled', 'formatter',
      'naturalArrowKeys').transform(function (result, value, key) {
        key = key.replace(/[A-Z]/g, '_$&').toLowerCase();
        result[key] = value;
      }).value();

    this.slider = new Slider(this.getDOMNode(), options);
  },

  componentWillUnmount: function () {
    if (this.slider) {
      this.slider.destroy();
      this.slider = null;
    }
  },

  render: function () {
    return (
      <input type="text"/>
    );
  }

});
