import StatsCard from "../../Cards/statsCard";
import { CARD_GAP } from "../../../utils/constants";
import DoughNutChart from "../../Charts/SiteMonitored";
import LoadProfileChart from "../../Charts/LoadProfileChart";
import PowerConsumptionChart from "../../Charts/PowerConsumption";
import AlertHistoryTable from "../../Table/AlertHistoryTable";

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

function Operations() {
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
        {dummyData.map((data, index) => (
          <div key={index}>
            <StatsCard
              title={data.title}
              value={data.value}
              isError={data.isError}
              isLoading={data.isLoading}
            />
          </div>
        ))}
      </div>

      {/* chats wrapper */}
      <div
        className="flex flex-wrap justify-center w-full"
        style={{ gap: CARD_GAP }}
      >
        <DoughNutChart />
        <LoadProfileChart />
        <PowerConsumptionChart />
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
