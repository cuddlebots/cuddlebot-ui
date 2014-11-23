'use strict';

/**
 * Module dependencies.
 */

var Router = require('react-router');
var routes = require('./routes.jsx');

/**
 * Install jQuery plugins.
 */

require('bootstrap/js/tooltip');

/**
 * Install tap event plugin.
 *
 * @see https://github.com/zilverline/react-tap-event-plugin
 */

require("react-tap-event-plugin")();

/**
 * Render app.
 */

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler), document.body);
});
