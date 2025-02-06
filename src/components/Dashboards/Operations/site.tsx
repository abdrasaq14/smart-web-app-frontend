/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IoChevronBack } from "react-icons/io5";
import { CARD_GAP } from "../../../utils/constants";
import BackButton from "../../feedBacks/BackButton";
import { dummyData } from "./operations";
import StatsCard from "../../Cards/statsCard";
import EnergyLossChart from "../../Charts/EnergyLoss";
import EnergyChart from "../../Charts/EnergyChat";
import GaugeChart from "../../Charts/DTStatus";
import AverageDailyVoltage from "../../Charts/AverageDailyVoltage";
import KeyInsights from "../../Charts/KeyInsights";
import { useState, useMemo } from "react";
import { useFetchData } from "../../../customHooks/useGetDashboardData";
import { mapResponseToLabelValue } from "../../../utils/utils";
const excludeCards = ["Unknown"];
function OperationSite({ site_id }: { site_id: string }) {
  const { data, isLoading, error } = useFetchData(
    ["/site", "fetchSite"],
    `/site/${site_id}`,
   {},
    {
      // @ts-ignore
      refreshInterval: 100000,
      refetchOnMount: true,
    }
  );
  const [transformedData, setTransformedData] = useState<any[]>([]);

  useMemo(() => {
    if (data) {
      return setTransformedData(mapResponseToLabelValue(data));
    }
    return null;
  }, [site_id, data]);
  console.log("SiteDataOperartiona", transformedData);
  return (
    <div
      className="flex flex-col w-full h-full min-h-full "
      style={{ gap: CARD_GAP }}
    >
      <div className="flex w-full">
        <BackButton />
      </div>
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
          : error
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatsCard
                key={index}
                title=""
                value=""
                isError={true}
                isLoading={false}
                cardErrorStyle="!h-[50px]"
              />
            ))
          : transformedData &&
            transformedData.map(
              (data: any, index: any) =>
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
      <div
        className="flex flex-wrap justify-between w-full"
        style={{ gap: CARD_GAP }}
      >
        <EnergyLossChart />
        <GaugeChart />
        <EnergyChart />
      </div>
      <div
        className="flex flex-wrap justify-between w-full"
        style={{ gap: CARD_GAP }}
      >
        <div
          className="grid min-w-full lg:min-w-[200px]"
          style={{
            gap: CARD_GAP,
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {dummyData.slice(0, 2).map((data, index) => (
            <div key={index}>
              <StatsCard
                title={data.title}
                value={data.value}
                isError={data.isError}
                isLoading={data.isLoading}
                style="min-h-[190px]"
              />
            </div>
          ))}
        </div>
        <AverageDailyVoltage />
        <KeyInsights />
      </div>
    </div>
  );
}

export default OperationSite;
