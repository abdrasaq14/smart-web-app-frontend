import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";
import { GetDashboardData } from "../../customHooks/useGetDashboardData";
import Loader from "../feedBacks/loader";

const LoadProfileChart = () => {
  const { data, isLoading, error } = GetDashboardData(
    "/operations/profile-chart"
  );
    const [selectedValue, setSelectedValue] = useState(30); // Set default value as 30 (30 Days)

    const filter = [
      { key: "30 Days", value: 30 },
      { key: "60 Days", value: 60 },
      { key: "90 Days", value: 90 },
      { key: "180 Days", value: 180 },
      { key: "1 Year", value: 365 },
    ];

    const handleChange = (e:any) => {
      setSelectedValue(parseInt(e.target.value)); // Update selected value
    };
  const newData = [
    [0, 120.3],
    [6, 110],
    [12, 105],
    [18, 130],
    [24, 150],
    [30, 175],
    [36, 132],
    [42, 180],
    [48, 195],
    [54, 104.3],
  ];

  const options = {
    dataset: {
      source: [["time", "profile"], ...newData],
    },
    xAxis: {
      type: "category",
      name: "Time (hours)",
      nameLocation: "center",
      nameGap: 30,
      boundaryGap: false, // Ensures x-axis starts at 0
      axisLabel: {
        formatter: (value: any) => (value === "0" ? "" : value), // Hides 0 label
      },
    },
    yAxis: {
      axisLine: {
        show: true, // Enable the left line
        lineStyle: {
          color: "#000", // Set the line color
          width: 0.8, //Set the line width
        },
      },
      type: "value",
      name: "Profile (KW)",
      nameLocation: "middle",
      nameGap: 50,
      min: 0, // Ensures y-axis starts at 0
    },
    series: [
      {
        name: "Collection",
        type: "line",
        encode: {
          x: "time",
          y: "profile",
        },
        smooth: true,
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
          color: "#000000",
        },
      },
    ],
  };

  const renderBody = () => {
    if (isLoading) {
      return <Loader />;
    }
    // else if (error) {
    //   return <div>Unable to fetch data</div>;
    // }
    else {
      return <ReactECharts option={options} style={{ height: 400 }} />;
    }
  };

  return (
    <CardLayout title="Load Profile (KW)" style="min-w-[400px] flex-1">
      <div className="flex flex-col h-full w-full relative">
        <select
          defaultValue={30}
          value={selectedValue}
          onChange={handleChange}
          className="cursor-pointer absolute flex items-center justify-center top-[-20px] right-0  w-[100px] py-3 px-2 rounded-full bg-[#E5E5E5] text-primary-blackMain"
        >
          {filter.map((item) => (
            <option
              key={item.key}
              value={item.value}
              className="text-primary-blackLight"
              selected={item.value === 30}
            >
              {item.key}
            </option>
          ))}
        </select>
        {renderBody()}
      </div>
    </CardLayout>
  );
};

export default LoadProfileChart;
