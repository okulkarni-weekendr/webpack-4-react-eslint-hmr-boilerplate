import React, { Component } from "react";
import PropTypes from "prop-types";
import GlobalImpressionErrorTracker from "./globalErrorTracker/GlobalImpressionErrorTracker";
import { range as d3Range } from "d3";

class GlobalErrorTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: d3Range(34).map(Math.random),
      currentIndex: null
    };

    this.setCurrentIndex = this.setCurrentIndex.bind(this);
    this.addData = this.addData.bind(this);
  }

  setCurrentIndex = (currentIndex) => {
    this.setState({
      currentIndex
    });
  };

  addData = () =>
    this.setState({
      data: [...this.state.data, Math.random()]
    });

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <svg width="100%" height="500">
                <GlobalImpressionErrorTracker
                  data={this.state.data}
                  width={500}
                  height={250}
                  x={0}
                  y={0}
                  highlightBar={this.setCurrentIndex}
                  highlightedBar={this.state.currentIndex}/>
                </svg>
            </div>
          <div className="column">
            Graph 2
          </div>
        </div>
      </div>
  </section>
  )
  }
}

GlobalErrorTracker.propTypes = {};

export default GlobalErrorTracker;
