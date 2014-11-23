'use strict';

/**
 * Module dependencies.
 */

var FastClick = require('fastclick');
var page = require('page');

// React components.

var ActionBar = require('./components/action-bar.jsx');
var ControlPanel = require('./components/control-panel.jsx');

/**
 * Initialize routes.
 */

page('/', show(ControlPanel));
page();

/**
 * Initialize vendor scripts.
 */

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

require('ratchet/js/toggles');
require('bootstrap/js/tooltip');

/**
 * Render action bar.
 */

var actionBarInstance = React.createElement(ActionBar);
React.render(actionBarInstance, document.getElementById('action-bar'));

/**
 * Show a top-level component.
 *
 * The currently active component is unmounted before the new component is
 * rendered in its place.
 *
 * @param component The React component to render
 * @api private
 */

function show (component) {
  var instance = React.createElement(component);
  return function () {
    var contentContainer = document.getElementById('main');
    React.unmountComponentAtNode(contentContainer);
    React.render(instance, contentContainer);
  };
}
