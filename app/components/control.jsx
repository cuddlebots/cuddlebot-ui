/** @jsx React.DOM */

/**
 * Module dependencies.
 */

var reactb = require('react-bootstrap');
var mui = require('material-ui');

// React components.

var Button = reactb.Button;
var ButtonGroup = reactb.ButtonGroup;
var PageHeader = reactb.PageHeader;
var Col = reactb.Col;
var Row = reactb.Row;

var PaperButton = mui.PaperButton;
var RadioButton = mui.RadioButton;
var Toggle = mui.Toggle;
var Slider = mui.Slider;

/**
 * Control view.
 */

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className="container container-fluid">
        <Row>
          <Col lg={6}>

            <h1>Head Control</h1>
            <Toggle />

            <h2>Purr Control</h2>
            <Toggle />

            <h3>Presets</h3>
            <PaperButton type="FLAT" label="Lowest" />
            <PaperButton type="FLAT" label="Lower" primary={true} />
            <PaperButton type="FLAT" label="Moderate" />
            <PaperButton type="FLAT" label="Higher" />
            <PaperButton type="FLAT" label="Highest" />

            <h3>Intensity</h3>
            <Slider name="intensity" />

          </Col>
          <Col lg={6}>

            <h1>Breath Control</h1>
            <Toggle />

            <h3>Presets</h3>
            <PaperButton type="FLAT" label="Lowest" />
            <PaperButton type="FLAT" label="Lower" primary={true} />
            <PaperButton type="FLAT" label="Moderate" />
            <PaperButton type="FLAT" label="Higher" />
            <PaperButton type="FLAT" label="Highest" />

            <h3>Symmetry</h3>
            <Slider name="symmetry" disabled={true} value={.5} />

            <h3>Rate</h3>
            <Slider name="rate" />

            <h3>Depth</h3>
            <Slider name="depth" value={.5} />

            <h1>Spine Control</h1>
            <Toggle />

            <h3>Presets</h3>
            <PaperButton type="FLAT" label="Lowest" />
            <PaperButton type="FLAT" label="Lower" primary={true} />
            <PaperButton type="FLAT" label="Moderate" />
            <PaperButton type="FLAT" label="Higher" />
            <PaperButton type="FLAT" label="Highest" />

            <h3>Arch</h3>
            <Slider name="arch" />

          </Col>
        </Row>
      </div>
    );
  }

});
