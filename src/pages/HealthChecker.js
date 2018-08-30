/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import GlobalErrorTracker from "./healthChecker/GlobalErrorTracker";
// import PropTypes from "prop-types"

class HealthChecker extends Component {
  render() {
    return <GlobalErrorTracker />;
  }
}

// HealthChecker.propTypes = {}

export default HealthChecker;
