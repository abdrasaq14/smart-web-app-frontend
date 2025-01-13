import StatsCard from "../../Cards/statsCard";
import { CARD_GAP } from "../../../utils/constants";
import CustomerBreakDownChart from "../../Charts/CustomerBreakdown";
import LoadProfileChart from "../../Charts/LoadProfileChart";
import PowerConsumptionChart from "../../Charts/PowerConsumption";
import AlertHistoryTable from "../../Table/AlertHistoryTable";
import FinancialPerformanceChart from "../../Charts/FinancialPerformance";

export const dummyData = [
  {
    title: "Total Revenue(CFA)",
    value: "32,727,658",
    isLoading: false,
    isError: false,
  },
  {
    title: "ATC&C Losses(%)",
    value: "23",
    isLoading: false,
    isError: false,
  },
  {
    title: "Downtime Losses (CFA)",
    value: "1,019,591",
    isLoading: false,
    isError: false,
  },
  {
    title: "Tarrif Losses (CFA)",
    value: "29,019,591",
    isLoading: false,
    isError: false,
  },
];

function FinanceHome() {
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
        <CustomerBreakDownChart />
        <FinancialPerformanceChart />
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

export default FinanceHome;
