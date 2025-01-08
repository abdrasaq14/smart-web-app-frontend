import StatsCard from "../Cards/statsCard";
import { CARD_GAP } from "../../utils/constants";
import DoughNutChart from "../Charts/DoughnutCharts";
import LoadProfileChart from "../Charts/LoadProfileChart";
import PowerConsumptionChart from "../Charts/PowerConsumption";
import AlertHistoryTable from "../Table/AlertHistoryTable";

const dummyData = [
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
        className="w-full flex flex-wrap justify-center lg:justify-start"
        style={{ gap: CARD_GAP }}
      >
        {dummyData.map((data, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px]  max-w-[250px] lg:min-w-[250px] lg:max-w-[450px]"
          >
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
          className="!gap-0 grid min-w-full lg:min-w-[300px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] !justify-start !items-start"
          // style={{ gap: CARD_GAP }}
        >
          {dummyData.slice(0, 2).map((data, index) => (
            <StatsCard
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
