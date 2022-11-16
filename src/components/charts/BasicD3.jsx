import * as d3 from "d3";

export const initChart = (height, width) => {
  d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black");
};
export const drawChart = (height, width, data) => {
  const svg = d3.select("#chart svg");
  var selection = svg.selectAll("rect").data(data);
  var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, height - 100]);
  selection
    .transition()
    .duration(300)
    .attr("height", (d) => yScale(d))
    .attr("y", (d) => height - yScale(d));

  selection
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 45)
    .attr("y", (d) => height)
    .attr("width", 40)
    .attr("height", 0)
    .attr("fill", "orange")
    .transition()
    .duration(300)
    .attr("height", (d) => yScale(d))
    .attr("y", (d) => height - yScale(d));

  selection
    .exit()
    .transition()
    .duration(300)
    .attr("y", (d) => height)
    .attr("height", 0)
    .remove();
};

// hello D3
// export const drawChart = (height, width) => {
//   d3.select("#chart")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("border", "1px solid black")
//     .append("text")
//     .attr("fill", "green")
//     .attr("x", 50)
//     .attr("y", 50)
//     .text("Hello D3");
// };
