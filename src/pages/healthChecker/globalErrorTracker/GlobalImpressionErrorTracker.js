/* eslint-disable no-param-reassign,react/prop-types,jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import * as d3 from 'd3'
import chroma from 'chroma-js'

class GlobalImpressionErrorTracker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      widthScale: d3
        .scaleBand()
        .domain(d3.range(0, this.props.data.length))
        .range([0, this.props.width]),

      heightScale: d3
        .scaleLinear()
        .domain([0, d3.max(this.props.data)])
        .range([0, this.props.height]),

      color: chroma.scale(['yellow', 'navy']).mode('hsl')
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { widthScale, heightScale } = prevState

    widthScale.domain(d3.range(0, nextProps.data.length))
    heightScale.domain([0, d3.max(nextProps.data)])

    prevState = { ...prevState, widthScale, heightScale }
    return prevState
  }

  render() {
    const { x, y, data, height, highlightBar, highlightedBar } = this.props

    const { widthScale, heightScale } = this.state

    return (
      <g
        transform={`translate(${x}, ${y})`}
        onMouseOut={() => highlightBar(null)}
      >
        {/* eslint-disable react/no-array-index-key */}
        {data.map((d, i) => (
          <rect
            x={widthScale(i)}
            y={height - heightScale(d)}
            width={widthScale.bandwidth()}
            height={heightScale(d)}
            style={{
              fill:
                i === highlightedBar
                  ? this.state.color(d)
                  : this.state.color(1 - d)
            }}
            onMouseOver={() => highlightBar(i)}
            key={i}
          />
        ))}
      </g>
    )
  }
}

export default GlobalImpressionErrorTracker
