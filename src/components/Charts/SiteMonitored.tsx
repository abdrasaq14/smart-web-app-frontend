/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import CardLayout from "../Cards/CardLayout";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { ERRORMESSAGE, NODATAMESSAGE } from "../../utils/utils";
import CardError from "../feedBacks/CardError";
import Loader from "../feedBacks/loader";
import NoContent from "../feedBacks/NoContent";

type SiteMonitoredData = {
  total: number;
  dataset: { key: string; value: number }[];
}

const SiteMonitoredChart = ({
  total,
  totalText,
  company_id,
}: {
  total?: string;
  totalText?: string;
  company_id: string;
}) => {
  const { data, isLoading, error } = useFetchData(
    ["/operations", "fetchOperations"],
    "/operations/sites-monitored",
    {
      company_id,
    }
  );
  console.log("SiteMonitoredChartData", data);
  const transformedData: SiteMonitoredData = useMemo(() => {
    if (!(data as SiteMonitoredData)?.dataset) return {} as SiteMonitoredData;
    return data as SiteMonitoredData;
  }, [data]);

  // Calculate the total value for percentage calculation
  
  const totalValue = (data as any)?.dataset.reduce(
    (sum:any, item:any) => sum + item.value,
    0
  );

  const options = {
    legend: {
      top: "80%",
      left: "center",
      data: transformedData?.dataset?.map(
        (item: any) =>
          `${item.key} (${((item.value / totalValue) * 100).toFixed(1)}%)`
      ), // Append percentage to legend name
    },
    series: [
      {
        type: "pie",
        data: transformedData?.dataset?.map((item:any) => ({
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
        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full">
            <Loader />
          </div>
        ) : error ? (
          <CardError message={ERRORMESSAGE} style="!h-[100px]" />
        ) : transformedData.total ? (
          <>
            <div className="absolute inset-0 top-[-15%] h-full flex  flex-col items-center justify-center">
              <span className="text-3xl font-semibold">{transformedData.total}</span>
              <span className="text-md font-semibold">locations</span>
            </div>
            <ReactECharts option={options} />
          </>
        ) : (
          <NoContent message={NODATAMESSAGE} />
        )}
      </div>
    </CardLayout>
  );
};

export default SiteMonitoredChart;
