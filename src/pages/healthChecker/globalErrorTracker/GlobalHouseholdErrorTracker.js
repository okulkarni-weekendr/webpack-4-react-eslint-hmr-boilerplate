import React from "react";
import PropTypes from "prop-types";
import data from '../../../../scratch/data.tsv'
import { timeParse } from "d3";
import * as d3 from "d3/dist/d3";

const GlobalHouseholdErrorTracker = props => {
  const parseTime = timeParse("%Y%m%d");

  const svg = d3.select("svg"),
    margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    z = d3.scaleOrdinal(d3.schemeCategory10);

  const line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y(d.temperature);
    });

  d3.tsv("data.tsv", type, function(error, data) {
    if (error) throw error;

    const cities = data.columns.slice(1).map(function(id) {
      return {
        id: id,
        values: data.map(function(d) {
          return { date: d.date, temperature: d[id] };
        })
      };
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));

    y.domain([
      d3.min(cities, function(c) { return d3.min(c.values, function(d) { return d.temperature; }); }),
      d3.max(cities, function(c) { return d3.max(c.values, function(d) { return d.temperature; }); })
    ]);

    z.domain(cities.map(function(c) { return c.id; }));


    return (
    <div>

    </div>
  );
};

GlobalHouseholdErrorTracker.propTypes = {

};

export default GlobalHouseholdErrorTracker;
