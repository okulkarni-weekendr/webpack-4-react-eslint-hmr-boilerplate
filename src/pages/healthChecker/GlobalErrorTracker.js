/* eslint-disable react/destructuring-assignment,no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { range as d3Range } from 'd3'
import GlobalImpressionErrorTracker from './globalErrorTracker/GlobalImpressionErrorTracker'

class GlobalErrorTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: d3Range(34).map(Math.random),
      currentIndex: null
    }

    this.setCurrentIndex = this.setCurrentIndex.bind(this)
    this.addData = this.addData.bind(this)
  }

  setCurrentIndex = currentIndex => {
    this.setState({
      currentIndex
    })
  }

  addData = () => {
    const { data } = this.state
    this.setState({
      data: [...data, Math.random()]
    })
  }

  render() {
    const { data } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <svg width="100%" height="500">
                <GlobalImpressionErrorTracker
                  data={data}
                  width={500}
                  height={250}
                  x={0}
                  y={0}
                  highlightBar={this.setCurrentIndex}
                  highlightedBar={this.state.currentIndex}
                />
              </svg>
            </div>
            <div className="column">Graph 2</div>
          </div>
        </div>
      </section>
    )
  }
}

GlobalErrorTracker.propTypes = {}

export default GlobalErrorTracker
