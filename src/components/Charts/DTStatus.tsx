import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import CardLayout from "../Cards/CardLayout";

const GaugeChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize the chart
    const myChart = echarts.init(chartRef.current);

    // Define the chart options
    const option: echarts.EChartsOption = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: 30,
          },
          pointer: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: -20,
            color: "#999",
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
              detail: {
              show: false,
            // valueAnimation: true,
            // width: "60%",
            // lineHeight: 40,
            // borderRadius: 8,
            // offsetCenter: [0, "-15%"],
            // fontSize: 60,
            // fontWeight: "bolder",
            // formatter: "{value} °C",
            // color: "inherit",
          },
          data: [
            {
              value: 20,
            },
          ],
        },
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          itemStyle: {
            color: "#FD7347",
          },
          progress: {
            show: true,
            width: 8,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 20,
            },
          ],
        },
      ],
    };

    // Set initial options
    myChart.setOption(option);

    // Update the chart data periodically
    const interval = setInterval(() => {
      const random = +(Math.random() * 60).toFixed(2);
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: random,
              },
            ],
          },
          {
            data: [
              {
                value: random,
              },
            ],
          },
        ],
      });
    }, 2000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      myChart.dispose();
    };
  }, []);

  return (
    <CardLayout
      title="Energy Loss Breakdown"
      style="min-w-[450px] lg:max-w-[320px] flex-1"
    >
      <div ref={chartRef} className="w-full h-[99%]" />
    </CardLayout>
  );
};

export default GaugeChart;
