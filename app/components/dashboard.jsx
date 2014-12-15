'use strict';

/**
 * Module dependencies.
 */

var mui = require('material-ui');
var reactb = require('react-bootstrap');
var request = require('superagent');

// React components.

var Router = require('react-router');

var Col = reactb.Col;
var Row = reactb.Row;

var Toggle = mui.Toggle;
var Slider = mui.Slider;

/**
 *
 */

module.exports = React.createClass({

  mixins: [Router.Navigation],

  getDefaultProps: function () {
    return {
      pageTitle: 'hello'
    };
  },

  getInitialState: function () {
    return {
      headxDisabled: true,
      headyDisabled: true,
      ribsDisabled: true,
      spineDisabled: true,
      purrDisabled: true
    };
  },

  render: function () {
    return (
      <div className="container container-fluid">

        <h3>Head Horizontal Control</h3>
        {this._renderControl('headx')}

        <h3>Head Vertical Control</h3>
        {this._renderControl('heady')}

        <h3>Ribs Control</h3>
        {this._renderControl('ribs')}

        <h3>Spine Control</h3>
        {this._renderControl('spine')}

        <h3>Purr Control</h3>
        {this._renderControl('purr')}

      </div>
    );
  },

  _renderControl: function (name) {
    return (
      <div>
        <Toggle onToggle={this._toggle(name)} />
        <Slider name={name} min={0} max={65535}
          disabled={this._isDisabled(name)}
          onChange={this._onUpdate(name)} />
      </div>
    );
  },

  _isDisabled: function (name) {
    return this.state[name + 'Disabled'];
  },

  _toggle: function (name) {
    var self = this;
    return function () {
      var state = {};
      state[name + 'Disabled'] = !self.state[name + 'Disabled'];
      self.setState(state);
    };
  },

  _onUpdate: function (name) {
    var self = this;
    return function (e, value) {
      if (self.state[name + 'Disabled']) return;

      var update = {
        addr: name,
        delay: 0,
        loop: 'forever',
        setpoints: [1000, parseInt(value, 10)]
      };

      if (self._req) self._req.abort();

      self._req = request
        .put('http://cuddlebot/1/setpoint.json')
        .send(update)
        .end(function () {
          self._req = null;
        });
    };
  }

});
