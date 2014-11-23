/** @jsx React.DOM */

'use strict';

/**
 * Module dependencies.
 */

var mui = require('material-ui');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./app-left-nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <mui.AppCanvas predefinedLayout={1}>
        <mui.AppBar onMenuIconClick={this._onMenuIconClick} title="{TODO: find title}" zDepth={0}>
        </mui.AppBar>
        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </mui.AppCanvas>
    );
  },

  _onMenuIconClick: function() {
    this.refs.leftNav.toggle();
  }

});
