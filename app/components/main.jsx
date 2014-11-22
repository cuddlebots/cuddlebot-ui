/** @jsx React.DOM */

/**
 * Module dependencies
 */

var IconBar = require('./icon-bar.jsx');
var ControlPanel = require('./control-panel.jsx');

/**
 * Icon bar.
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div id="main">
        <IconBar/>
        <ControlPanel/>
      </div>
    );
  }

});
