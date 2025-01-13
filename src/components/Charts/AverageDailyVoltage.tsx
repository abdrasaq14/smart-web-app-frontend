import React from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";
import { COLORS } from "../../utils/constants";
import { text } from "stream/consumers";

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

const AverageDailyVoltage = ({
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
    },
    //   legend: {
    //     data: ["Red Phase", "Yellow Phase", "Blue Phase"],
    //     icon: "circle", // Set legend keys to be circular
    //     textStyle: {
    //       backgroundColor: "#f5f5f5", // Grey background for the text
    //       borderRadius: 24, // Rounded text container
    //       padding: [8, 12], // Padding for text
    //     },
    //       right: 0,
    //   },
    grid: {
      top: "15%", // Adjust the top margin for better alignment
      left: "3%", // Left margin for y-axis labels
      right: "3%", // Right margin for overflow prevention
      bottom: "10%", // Bottom margin for x-axis labels
      containLabel: true, // Ensure labels fit within the chart area
    },
    toolbox: {
      feature: {
        //   saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false, // Ensures the line chart is continuous
      data: [2, 4, 6, 8, 10, 12, 14],
      axisLine: {
        show: true, // Enable the left line
        lineStyle: {
          color: "#000", // Set the line color
          width: 0.8, //Set the line width
        },
      },
      axisLabel: {
        formatter: (value: any) => `${value}:00`, // Optional: Append ":00" for time-like labels
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true, // Enable the left line
        lineStyle: {
          color: "#000", // Set the line color
          width: 0.8, //Set the line width
        },
      },
      axisTick: {
        show: false, // Hides ticks for a cleaner look
      },
      splitLine: {
        lineStyle: {
          type: "dashed", // Dashed grid lines for better alignment
          color: "#eee",
        },
      },
    },
    series: [
      {
        name: "Red Phase",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true, // Makes the line smooth
        lineStyle: {
          color: COLORS.RED, // Replace with your desired color variable
        },
        symbol: "none", // Removes the dots at each coordinate
      },
      {
        name: "Yellow Phase",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
        smooth: true,
        lineStyle: {
          color: COLORS.PRIMARY,
        },
        symbol: "none", // Removes the dots at each coordinate
      },
      {
        name: "Blue Phase",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
        smooth: true,
        lineStyle: {
          color: COLORS.PURPLE,
        },
        symbol: "none", // Removes the dots at each coordinate
      },
    ],
  };

  const legend = [
    {
      text: "Red Phase",
      color: COLORS.RED,
    },
    {
      text: "Yellow Phase",
      color: COLORS.PRIMARY,
    },
    {
      text: "Blue Phase",
      color: COLORS.PURPLE,
    },
  ];
  const filter = [
    { key: "Average Daily Voltage (V)", value: 30 },
    { key: "Average Daily Load (KW)", value: 60 },
    { key: "Average Daily PF", value: 90 },
    { key: "Average Daily Frequency (Hz)", value: 180 },
  ];
  return (
    <CardLayout title="Average Daily Voltage" style="lg:min-w-[570px] flex-1">
      <div className="flex flex-col w-full relative">
        <div className="absolute top-[-5%] right-0 flex gap-2 justify-between">
          <select className="cursor-pointer flex items-center justify-center max-w-[30%] py-1 px-2 rounded-full bg-[#E5E5E5] text-primary-blackMain text-[10px]">
            {filter.map((item) => (
              <option
                key={item.key}
                value={item.value}
                className="text-primary-blackLight cursor-pointer"
                selected={item.value === 30}
              >
                {item.key}
              </option>
            ))}
          </select>
          <div className="flex-1 flex gap-2 justify-end">
            {legend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1 rounded-full bg-primary-blackLighter2 px-3 py-2">
                <span
                  className="w-4 h-4 rounded-md"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-[11px]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <ReactECharts option={options} />
      </div>
    </CardLayout>
  );
};

export default AverageDailyVoltage;
