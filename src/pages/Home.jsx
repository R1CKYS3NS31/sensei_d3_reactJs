import React, { useEffect, useState } from "react";
import { BarChart } from "../components/charts/BarChart";
import { drawChart, initChart } from "../components/charts/BasicD3";

const dataset = [
  [10, 30, 40, 20],

  [10, 40, 30, 20, 50, 10],

  [60, 30, 40, 20, 30],
];

var i = 0;

export const Home = () => {
  const [data, setData] = useState([]);
// BasicD3.jsx
//   useEffect(() => {
//     initChart(400, 600);
//     changeChart();
//   }, []);

//   const changeChart = () => {
//     drawChart(400, 600, dataset[i++]);
//     if (i === dataset.length) i = 0;
//   };

useEffect(() => {
    changeData()
}, [])

const changeData = ()=>{
    setData(dataset[i++])
    if(i===dataset.length) i =0
}
  return (
    <div className="App">
      <h1>Home</h1>
      <h4>Graphs for D3 with react</h4>
      {/* <button onClick={changeChart}>Change Data</button>  */}
      <button onClick={changeData}>Change Data</button>
      <BarChart width ={600} height={400} data={data}/>
    </div>
  );
};
