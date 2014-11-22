/** @jsx React.DOM */

/**
 * Control view.
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className="rows">
        <div className="columns large-6">
          <fieldset>
            <legend>
              <div className="switch round tiny pull-left">
                <input id="head-enabled" type="checkbox"/>
                <label htmlFor="head-enabled">Enabled</label>
              </div>
              &nbsp;
              Head Control
            </legend>
          </fieldset>
          <fieldset>
            <legend>
              <div className="switch round tiny pull-left">
                <input id="purr-enabled" type="checkbox"/>
                <label htmlFor="purr-enabled">Enabled</label>
              </div>
              &nbsp;
              Purr Control
            </legend>
            <h3>Presets</h3>
            <ul className="button-group">
              <li><a href="javascript:void 0" className="button secondary small">Lowest</a></li>
              <li><a href="javascript:void 0" className="button small">Lower</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Moderate</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Higher</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Highest</a></li>
            </ul>
            <h3>Intensity</h3>
            <div className="range-slider round" data-slider>
              <span className="range-slider-handle" role="slider"></span>
              <span className="range-slider-active-segment"></span>
            </div>
          </fieldset>
        </div>
        <div className="columns large-6">
          <fieldset>
            <legend>
              <div className="switch round tiny pull-left">
                <input id="ribs-enabled" type="checkbox"/>
                <label htmlFor="ribs-enabled">Enabled</label>
              </div>
              &nbsp;
              Ribs Control
            </legend>
            <h3>Presets</h3>
            <ul className="button-group">
              <li><a href="javascript:void 0" className="button secondary small">Lowest</a></li>
              <li><a href="javascript:void 0" className="button small">Lower</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Moderate</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Higher</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Highest</a></li>
            </ul>
            <h3>Symmetry</h3>
            <div className="range-slider round" data-slider>
              <span className="range-slider-handle" role="slider"></span>
              <span className="range-slider-active-segment"></span>
            </div>
            <h3>Rate</h3>
            <div className="range-slider round" data-slider>
              <span className="range-slider-handle" role="slider"></span>
              <span className="range-slider-active-segment"></span>
            </div>
            <h3>Depth</h3>
            <div className="range-slider round" data-slider>
              <span className="range-slider-handle" role="slider"></span>
              <span className="range-slider-active-segment"></span>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <div className="switch round tiny pull-left">
                <input id="spine-enabled" type="checkbox"/>
                <label htmlFor="spine-enabled">Enabled</label>
              </div>
              &nbsp;
              Spine Control
            </legend>
            <h3>Presets</h3>
            <ul className="button-group">
              <li><a href="javascript:void 0" className="button secondary small">Lowest</a></li>
              <li><a href="javascript:void 0" className="button small">Lower</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Moderate</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Higher</a></li>
              <li><a href="javascript:void 0" className="button secondary small">Highest</a></li>
            </ul>
            <h3>Arch</h3>
            <div className="range-slider round" data-slider>
              <span className="range-slider-handle" role="slider"></span>
              <span className="range-slider-active-segment"></span>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }

});
