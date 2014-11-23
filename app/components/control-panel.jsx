/** @jsx React.DOM */

/**
 * Module dependencies.
 */

var Slider = require('./ui/slider.jsx');

/**
 * Control view.
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="rows">
          <div className="col-lg-6">
            <div className="well">
              <div className="control-header">
                <div className="toggle pull-right">
                  <div className="toggle-handle"></div>
                </div>
                <h2>Head Control</h2>
              </div>
            </div>
            <div className="well">
              <div className="control-header">
                <div className="toggle pull-right">
                  <div className="toggle-handle"></div>
                </div>
                <h2>Purr Control</h2>
              </div>
              <div className="form-group clearfix">
                <label>Presets</label>
                <div className="clearfix">
                  <div className="btn-group pull-left">
                    <a href="javascript:void 0" className="btn btn-default">Lowest</a>
                    <a href="javascript:void 0" className="btn btn-primary">Lower</a>
                    <a href="javascript:void 0" className="btn btn-default">Moderate</a>
                    <a href="javascript:void 0" className="btn btn-default">Higher</a>
                    <a href="javascript:void 0" className="btn btn-default">Highest</a>
                  </div>
                  <div className="btn-group pull-right">
                    <a href="javascript:void 0" className="btn btn-warning">Custom</a>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <label>Intensity</label>
                <Slider/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="well">
              <div className="control-header">
                <div className="toggle pull-right">
                  <div className="toggle-handle"></div>
                </div>
                <h2>Ribs Control</h2>
              </div>
              <div className="form-group clearfix">
                <label>Presets</label>
                <div className="clearfix">
                  <div className="btn-group pull-left">
                    <a href="javascript:void 0" className="btn btn-default">Lowest</a>
                    <a href="javascript:void 0" className="btn btn-primary">Lower</a>
                    <a href="javascript:void 0" className="btn btn-default">Moderate</a>
                    <a href="javascript:void 0" className="btn btn-default">Higher</a>
                    <a href="javascript:void 0" className="btn btn-default">Highest</a>
                  </div>
                  <div className="btn-group pull-right">
                    <a href="javascript:void 0" className="btn btn-warning">Custom</a>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <label>Symmetry</label>
                <Slider/>
              </div>
              <div className="form-group clearfix">
                <label>Rate</label>
                <Slider/>
              </div>
              <div className="form-group clearfix">
                <label>Depth</label>
                <Slider/>
              </div>
            </div>
            <div className="well">
              <div className="control-header">
                <div className="toggle pull-right">
                  <div className="toggle-handle"></div>
                </div>
                <h2>Spine Control</h2>
              </div>
              <div className="form-group clearfix">
                <label>Presets</label>
                <div className="clearfix">
                  <div className="btn-group pull-left">
                    <a href="javascript:void 0" className="btn btn-default">Lowest</a>
                    <a href="javascript:void 0" className="btn btn-primary">Lower</a>
                    <a href="javascript:void 0" className="btn btn-default">Moderate</a>
                    <a href="javascript:void 0" className="btn btn-default">Higher</a>
                    <a href="javascript:void 0" className="btn btn-default">Highest</a>
                  </div>
                  <div className="btn-group pull-right">
                    <a href="javascript:void 0" className="btn btn-warning">Custom</a>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix">
                <label>Arch</label>
                <Slider/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
