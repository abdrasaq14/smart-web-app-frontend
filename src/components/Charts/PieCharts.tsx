import React from "react";
import ReactECharts from "echarts-for-react";

type DataRow = {
  value: number;
  key: string;
};

type Props = {
  pieTitle: string;
  data: DataRow[];
};

const PieChart = ({ pieTitle, data }: Props) => {
  console.log("pieChartData", data);

  // Calculate the total value for percentage calculation
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const options = {
    legend: {
      top: "80%",
      left: "center",
      data: data.map(
        (item) =>
          `${item.key} (${((item.value / totalValue) * 100).toFixed(1)}%)`
      ), // Append percentage to legend name
    },
    series: [
      {
        type: "pie",
        data: data.map((item) => ({
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

  return <ReactECharts option={options} />;
};

export default PieChart;
