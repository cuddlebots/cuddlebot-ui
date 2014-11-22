/** @jsx React.DOM */

/**
 * Icon bar view.
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div id="icon-bar" className="icon-bar large-vertical five-up">
        <a className="item">
          <i className="fa fa-home"></i>
          <label>Home</label>
        </a>
        <a href="#controller-content" className="item">
          <i className="fa fa-gamepad"></i>
          <label>Controller</label>
        </a>
        <a className="item">
          <i className="fa fa-info"></i>
          <label>Info</label>
        </a>
        <a className="item">
          <i className="fa fa-envelope"></i>
          <label>Mail</label>
        </a>
        <a className="item">
          <i className="fa fa-thumbs-up"></i>
          <label>Like</label>
        </a>
      </div>
    );
  }

});
