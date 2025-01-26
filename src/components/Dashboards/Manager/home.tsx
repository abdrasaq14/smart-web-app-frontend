/* eslint-disable @typescript-eslint/no-explicit-any */
import StatsCard from "../../Cards/statsCard";
import { CARD_GAP } from "../../../utils/constants";
import DoughNutChart from "../../Charts/SiteMonitored";
import LoadProfileChart from "../../Charts/LoadProfileChart";
import PowerConsumptionChart from "../../Charts/PowerConsumption";
import AlertHistoryTable from "../../Table/AlertHistoryTable";
import SiteLocationMap from "./Map";
import { useFetchData } from "../../../customHooks/useGetDashboardData";
import { mapResponseToLabelValue } from "../../../utils/utils";
import { useEffect, useState } from "react";
import RevenueByDistrictChart from "../../Charts/RevenueByDistrict";
const excludeCards = [
  "Unknown",
  "Number of Users",
  "Number of Sites",
  "Pending Alerts",
];

function Manager() {
  const { data, isLoading, error } = useFetchData("/manager/cards-data", {
    card_type: "manager_home",
  });
  const [transformedData, setTransformedData] = useState<any[]>([]);
  useEffect(() => {
    if (data) {
      setTransformedData(mapResponseToLabelValue(data));
    }
  }, [data]);
  const {
    data: PowerConsumptionData,
    isLoading: PowerConsumptionIsLoading,
    error: PowerConsumptionError,
  } = useFetchData("/operations/power-consumption-chart", {});
  // const { data: RevenueByDistrictData, isLoading: RevenueByDistrictIsLoading, error: RevenueByDistrictError } = useFetchData("/manager/revenue-by-district", {})
  return (
    <div
      className="flex flex-col items-start justify-center w-full"
      style={{ gap: CARD_GAP }}
    >
      {/* stats wrapper */}
      <div
        className="grid w-full"
        style={{
          gap: CARD_GAP,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatsCard
                key={index}
                title=""
                value=""
                isError={false}
                isLoading={true}
              />
            ))
          : error ? (
           Array.from({ length: 4 }).map((_, index) => (
              <StatsCard
                key={index}
                title=""
                value=""
                isError={true}
               isLoading={false}
               cardErrorStyle="!h-[50px]"
              />
            ))
          ) : transformedData.map(
              (data, index) =>
                !excludeCards.includes(data.label) && (
                  <div key={index}>
                    <StatsCard
                      title={data.label}
                      value={data.value as string}
                      isError={!!error && !isLoading && !data}
                      isLoading={isLoading}
                    />
                  </div>
                )
            )}
      </div>

      {/* chats wrapper */}
      <div
        className="flex flex-col xl:flex-row flex-wrap justify-between w-full"
        style={{ gap: CARD_GAP }}
      >
        <div
          className="flex flex-col flex-1 xl:max-w-[70%]"
          style={{ gap: CARD_GAP }}
        >
          <SiteLocationMap />
          <div
            className="w-full grid min-w-full lg:min-w-[250px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] !justify-start !items-start"
            style={{ gap: CARD_GAP }}
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <StatsCard
                    key={index}
                    title=""
                    value=""
                    isError={false}
                    isLoading={true}
                  />
                ))
              : transformedData.map(
                  (data, index) =>
                    excludeCards.includes(data.label) &&
                    data.label !== "Unknown" && (
                      <div key={index}>
                        <StatsCard
                          title={data.label}
                          value={data.value as string}
                          isError={!!error && !isLoading && !data}
                          isLoading={isLoading}
                          style=""
                        />
                      </div>
                    )
                )}
          </div>
        </div>
        <div
          className="w-full max-w-[550px] xl:max-w-[30%] flex flex-col sm:flex-row "
          style={{ gap: CARD_GAP }}
        >
          <RevenueByDistrictChart />
          <PowerConsumptionChart />
        </div>
      </div>
    </div>
  );
}

export default Manager;
