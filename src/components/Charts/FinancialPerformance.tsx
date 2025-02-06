/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import Loader from "../feedBacks/loader";
import { COLORS } from "../../utils/constants";

const FinancialPerformanceChart = () => {
  const { data, isLoading, error } = useFetchData(
    ["/operations", "fetchLoadProfile"],
    "/operations/profile-chart"
  );

  const [selectedValue, setSelectedValue] = useState(30);

  const filter = [
    { key: "30 Days", value: 30 },
    { key: "60 Days", value: 60 },
    { key: "90 Days", value: 90 },
    { key: "180 Days", value: 180 },
    { key: "1 Year", value: 365 },
  ];

  const handleChange = (e: any) => {
    setSelectedValue(parseInt(e.target.value));
  };

  const newData = {
    dataset: [
      ["month", "collection", "billedEnergy"],
      ["JAN", 0, 1000],
      ["FEB", 1500, 1100],
      ["MAR", 1300, 1050],
      ["APR", 1700, 1250],
      ["MAY", 1600, 1200],
      ["JUN", 1800, 1300],
      ["JUL", 2000, 1400],
      ["AUG", 2100, 1500],
      ["SEP", 1900, 1350],
      ["OCT", 2200, 1600],
      ["NOV", 2300, 1700],
      ["DEC", 2400, 1800],
    ],
  };

  const options = {
    dataset: {
      source: newData.dataset,
    },
    xAxis: {
      axisLine: {
        show: true, // Enable the left line
        lineStyle: {
          color: "#000", // Set the line color
          width: 0.8, //Set the line width
        },
      },
      type: "category",
      name: "Month",
      nameLocation: "center",
      nameGap: 30,
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
      name: "Energy (KW)",
      nameLocation: "middle",
      nameGap: 50,
      min: 0,
    },
    series: [
      {
        name: "Collection",
        type: "line",
        encode: {
          x: "month",
          y: "collection",
        },
        smooth: true,
        symbol: "circle", // Shape of the points
        symbolSize: 4, // Size of the points
        itemStyle: {
          color: COLORS.BLACK, // Color of the points
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#7C878E" }, // Dark grey at the top
              { offset: 1, color: "#7C878E00" }, // Light grey at the bottom
            ],
          },
        },
        lineStyle: {
          color: "black",
        },
      },
      {
        name: "Billed Energy",
        type: "line",
        encode: {
          x: "month",
          y: "billedEnergy",
        },
        smooth: true,
        symbol: "circle", // Shape of the points
        symbolSize: 4, // Size of the points
        itemStyle: {
          color: "#F7941D", // Color of the points
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#fcef7a" }, // Yellow at the top
              { offset: 1, color: "#FFC00000" }, // Light yellow at the bottom
            ],
          },
        },
        lineStyle: {
          color: "#F7941D",
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    //   legend: {
    //     data: ["Collection", "Billed Energy"],
    //   },
  };

  const renderBody = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return <ReactECharts option={options} style={{ height: 400 }} />;
    }
  };
  const legend = [
    {
      text: "Collection",
      color: "#F7941D",
    },
    {
      text: "Billed",
      color: COLORS.BLACK_LIGHTER,
    },
  ];
  return (
    <CardLayout title="Energy Profile" style="min-w-[400px] flex-1">
      <div className="flex flex-col h-full w-full relative">
        <div className="absolute top-[-5%] right-0 flex gap-2 justify-between">
          <div className="flex-1 flex gap-2 justify-end">
            {legend.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 rounded-full bg-primary-blackLighter2 px-3 py-2"
              >
                <span
                  className="w-4 h-4 rounded-md"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-[11px]">{item.text}</span>
              </div>
            ))}
          </div>
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
        </div>
        {renderBody()}
      </div>
    </CardLayout>
  );
};

export default FinancialPerformanceChart;
