/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import StatsCard from "../../Cards/statsCard";
import { CARD_GAP } from "../../../utils/constants";
import DoughNutChart from "../../Charts/SiteMonitored";
import LoadProfileChart from "../../Charts/LoadProfileChart";
import PowerConsumptionChart from "../../Charts/PowerConsumption";
import AlertHistoryTable from "../../Table/AlertHistoryTable";
import { useFetchData } from "../../../customHooks/useGetDashboardData";
import { useMemo } from "react";

export const dummyData = [
  {
    title: "Total Consumption (KWh)",
    value: "102",
    isLoading: false,
    isError: false,
  },
  {
    title: "Total Revenue",
    value: "117.65",
    isLoading: false,
    isError: false,
  },
  {
    title: "Avg. Availability (hrs)",
    value: "7",
    isLoading: false,
    isError: false,
  },
  {
    title: "Power Cut",
    value: "0",
    isLoading: false,
    isError: false,
  },
];
const excludeCards = [
  "Unknown",
  "Number of Users",
  "Number of Sites",
  "Pending Alerts",
];
function Operations({ company_id }: { company_id: string }) {
    const { data, isLoading, error } = useFetchData(
      "/operations/cards-data",
      {
        card_type: "operations_home",
        company_id,
      },
      {
        // @ts-ignore
        refreshInterval: 100000,
        refetchOnMount: true,
      }
  );
    const transformedData:any = useMemo(() => {
      if (data) {
        return data;
      }
      return null;
    }, [company_id, data]);
    console.log('ooperationsData', transformedData)
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
          : transformedData && transformedData.map(
              (data:any, index:any) =>
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
        className="flex flex-wrap justify-center w-full"
        style={{ gap: CARD_GAP }}
      >
        <DoughNutChart />
        <LoadProfileChart />
        <PowerConsumptionChart company_id={company_id} />
      </div>

      <div
        className="flex flex-wrap justify-center w-full"
        style={{ gap: CARD_GAP }}
      >
        <AlertHistoryTable />
        <div
          className="w-full gap-6 grid min-w-full lg:min-w-[250px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] !justify-start !items-start"
          // style={{ gap: CARD_GAP }}
        >
          {dummyData.slice(0, 2).map((data, idx) => (
            <StatsCard
              key={idx}
              title={data.title}
              value={data.value}
              isError={data.isError}
              isLoading={data.isLoading}
              style="min-h-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Operations;
