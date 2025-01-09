import React from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";

type DataRow = {
  value: number;
  key: string;
};

const data = {
  total: 12,
  dataset: [
    { key: "active", value: 10 },
    { key: "offline", value: 2 },
  ],
};

const DoughNutChart = ({
  total,
  totalText,
}: {
  total?: string;
  totalText?: string;
}) => {
  console.log("DoughNutChartData", data);

  // Calculate the total value for percentage calculation
  const totalValue = data.dataset.reduce((sum, item) => sum + item.value, 0);

  const options = {
    legend: {
      top: "80%",
      left: "center",
      data: data.dataset.map(
        (item) =>
          `${item.key} (${((item.value / totalValue) * 100).toFixed(1)}%)`
      ), // Append percentage to legend name
    },
    series: [
      {
        type: "pie",
        data: data.dataset.map((item) => ({
          ...item,
          name: `${item.key} (${((item.value / totalValue) * 100).toFixed(
            1
          )}%)`, // Add percentage to name
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 6,
            color: item.key.includes("active") ? "#FFC000" : "#7C878E", // Pie chart segment color
          },
        })),
        radius: ["40%", "70%"],
        center: ["50%", "35%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  return (
    <CardLayout
      title="Site Monitored"
      style="min-w-[300px] lg:max-w-[300px] flex-1"
    >
      <div className="flex flex-col h-full w-full relative">
        <div className="absolute inset-0 top-[-15%] h-full flex  flex-col items-center justify-center">
          <span className="text-3xl font-semibold">{data.total}</span>
          <span className="text-md font-semibold">locations</span>
        </div>
        <ReactECharts option={options} />
      </div>
    </CardLayout>
  );
};

export default DoughNutChart;
