/** @jsx React.DOM */

'use strict';

/**
 * Module dependencies.
 */

var mui = require('material-ui');

var Router = require('react-router');
var PaperButton = mui.PaperButton;

module.exports = React.createClass({

  mixins: [Router.Navigation],

  getDefaultProps: function () {
    return {
      pageTitle: 'hello'
    };
  },

  render: function() {

    return (
      <div>hi</div>
    );
  }

});
