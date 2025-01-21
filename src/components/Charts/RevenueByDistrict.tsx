import React, { useEffect, useMemo } from "react";
import CardLayout from "../Cards/CardLayout";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { errorImage, noDataImage } from "../../assets/layout";
import Loader from "../feedBacks/loader";
import { ERRORMESSAGE, NODATAMESSAGE } from "../../utils/utils";

interface DistrictData {
  title: string;
  percentage: number;
}

function RevenueByDistrictChart() {
  const {
    data: powerConsumptionData,
    isLoading,
    error,
  } = useFetchData("/operations/power-consumption-chart", {});

  const transformedData: DistrictData[] = useMemo(() => {
    if (!powerConsumptionData) return [];
    const dataset = (powerConsumptionData as { dataset: [string, number][] })
      .dataset;

    // Skip the header row and map to the expected structure
    return dataset.slice(1).map(([title, value]) => ({
      title,
      percentage: value,
    }));
  }, [powerConsumptionData]);

  return (
    <CardLayout title="Revenue" style="min-w-[300px] flex-1">
      <div className="flex flex-col gap-6 h-[90%] w-full">
        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full">
            <Loader />
          </div>
        ) : error ? (
          <div className="flex flex-col  justify-center items-center h-full w-full">
            <img src={errorImage} alt="unable to fetch data" className="max-h-[150px]" />
            <span className="font-semibold">{ERRORMESSAGE}</span>
          </div>
        ) : transformedData.length ? (
          transformedData.map((district, idx) => (
            <DistrictBar
              key={idx}
              title={district.title}
              percentage={district.percentage}
            />
          ))
        ) : (
          <div className="flex flex-col  justify-center items-center h-full w-full">
            <img src={noDataImage} alt="No data" className="max-h-[150px]" />
            <span className="font-semibold">{NODATAMESSAGE}</span>
          </div>
        )}
      </div>
    </CardLayout>
  );
}

const DistrictBar = ({ title, percentage }: DistrictData) => {
  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <span className="mb-2 font-semibold">{title}</span>

      {/* Progress bar container */}
      <div className="relative w-full h-4 bg-primary-border rounded-full overflow-hidden">
        {/* Progress bar (yellow part) */}
        <div
          className="absolute top-0 left-0 h-full bg-primary-yellowMain rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RevenueByDistrictChart;
