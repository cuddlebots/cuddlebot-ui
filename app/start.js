'use strict';

/**
 * Module dependencies.
 */

var page = require('page');

// React components.

var Main = require('./components/main.jsx');

/**
 * Initialize routes.
 */

page('/', show(Main));
page();

/**
 * Initialize jQuery plugins
 */

require('../bower_components/jquery.cookie/jquery.cookie.js');
require('../bower_components/jquery-placeholder/jquery.placeholder.js');
require('../bower_components/foundation/js/foundation.js');

/**
 * Initialize foundation.
 */

$(document).foundation();

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
    var contentContainer = document.body;
    React.unmountComponentAtNode(contentContainer);
    React.render(instance, contentContainer);
  };
}
