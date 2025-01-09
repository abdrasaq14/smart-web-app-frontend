import React from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";
import { COLORS } from "../../utils/constants";

type DataRow = {
  value: number;
  key: string;
};

const data = {
  total: 200,
  dataset: [
    { key: "billed", value: 70 },
    { key: "collected", value: 20 },
    { key: "downtime", value: 110 },
  ],
};

const EnergyChart = ({
  total,
  totalText,
}: {
  total?: string;
  totalText?: string;
}) => {
  console.log("EnergyLossChartData", data);

 
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLine: {
        show: true, // Enable the left line
        lineStyle: {
          color: "#000", // Set the line color
          width: 0.8, //Set the line width
        },
      },
      axisLabel: {
        margin: 10, // Add spacing between the labels and the axis
      },
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      itemStyle: {
        color: COLORS.PRIMARY, // Change bar color to yellow
      },
      data: [10, 52, 200, 334, 390, 330, 220, 100, 200, 334, 390, 330],
    },
  ],
};


  return (
    <CardLayout
      title="Energy Loss Breakdown"
      style="min-w-[450px] flex-1"
    >
      <div className="flex flex-col h-full w-full relative">
        <ReactECharts option={options} />
      </div>
    </CardLayout>
  );
};

export default EnergyChart;
