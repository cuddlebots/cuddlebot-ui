'use strict';

/**
 * Module dependencies
 */

var page = require('page');

/**
 * Initialize jQuery plugins
 */

require('../bower_components/jquery.cookie/jquery.cookie.js');
require('../bower_components/jquery-placeholder/jquery.placeholder.js');

/**
 * Initialize Foundation
 */

require('../bower_components/foundation/js/foundation.js');

/**
 * React components
 */

var Main = require('./components/main.jsx');

/**
 * Routes
 */

// page('/', show(Main));
// page();

show(Main)();

function show (component) {
  var instance = React.createElement(component);
  return function () {
    var contentContainer = document.body;
    React.unmountComponentAtNode(contentContainer);
    React.render(instance, contentContainer);
  };
}

$(document).foundation();
