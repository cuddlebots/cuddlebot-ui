/** @jsx React.DOM */

/**
 * Module dependencies
 */

var ActionBar = require('./action-bar.jsx');
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
        <ActionBar />
        <ControlPanel />
      </div>
    );
  }

});
