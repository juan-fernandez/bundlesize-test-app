import React from "react";
import logo from "./logo.svg";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from "react-vis";
import "./App.css";

function AxisOn0({
  xDomain = [-1, 3],
  yDomain = [-5, 15],
  xAxisOn0 = true,
  yAxisOn0 = true,
  verticalTickValues = [],
  horizontalTickValues = [0]
}) {
  return (
    <XYPlot width={300} height={300} {...{ xDomain, yDomain }}>
      {!verticalTickValues || verticalTickValues.length ? (
        <VerticalGridLines tickValues={verticalTickValues} />
      ) : null}
      {!horizontalTickValues || horizontalTickValues.length ? (
        <HorizontalGridLines tickValues={horizontalTickValues} />
      ) : null}
      <XAxis on0={xAxisOn0} />
      <YAxis on0={yAxisOn0} />
      <LineSeries
        data={[
          { x: -1, y: 10 },
          { x: 0, y: 5 },
          { x: 1, y: 3 },
          { x: 2, y: -5 },
          { x: 3, y: 15 }
        ]}
      />
    </XYPlot>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AxisOn0 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
