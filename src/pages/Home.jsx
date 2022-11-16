import React, { useEffect, useState } from "react";
import { drawChart } from "../components/charts/BasicD3";

const dataset = [
  [10, 30, 40, 20],

  [10, 40, 30, 20, 50, 10],

  [60, 30, 40, 20, 30],
];

var i = 0;

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    drawChart(400, 600);
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <h4>Graphs for D3 with react</h4>
      <div id="chart"></div>
    </div>
  );
};
