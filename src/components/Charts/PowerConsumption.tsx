import React, { useEffect, useMemo } from "react";
import CardLayout from "../Cards/CardLayout";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import { noDataImage } from "../../assets/layout";
import Loader from "../feedBacks/loader";
import { ERRORMESSAGE, NODATAMESSAGE } from "../../utils/utils";
import CardError from "../feedBacks/CardError";
import NoContent from "../feedBacks/NoContent";

interface DistrictData {
  title: string;
  percentage: number;
}

function PowerConsumptionByDistrictChart({company_id}: {company_id: string}) {
  const {
    data: powerConsumptionData,
    isLoading,
    error,
  } = useFetchData(
    ["/operations", "fetchPowerConsumption"],
    "/operations/power-consumption-chart", {
    company_id,
  });

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
    <CardLayout
      title="Power Consumption"
      style="min-w-[300px] flex-1 lg:max-w-[400px]"
    >
      <div className="flex flex-col gap-6 h-full w-full">
        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full">
            <Loader />
          </div>
        ) : error ? (
          <CardError message={ERRORMESSAGE} style="!h-[100px]" />
        ) : transformedData.length ? (
          transformedData.map((district, idx) => (
            <DistrictBar
              key={idx}
              title={district.title}
              percentage={district.percentage}
            />
          ))
        ) : (
          <NoContent message={NODATAMESSAGE} />
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

export default PowerConsumptionByDistrictChart;
