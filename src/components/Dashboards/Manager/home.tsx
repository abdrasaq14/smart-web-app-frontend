import StatsCard from "../../Cards/statsCard";
import { CARD_GAP } from "../../../utils/constants";
import DoughNutChart from "../../Charts/SiteMonitored";
import LoadProfileChart from "../../Charts/LoadProfileChart";
import PowerConsumptionChart from "../../Charts/PowerConsumption";
import AlertHistoryTable from "../../Table/AlertHistoryTable";
import SiteLocationMap from "./Map";

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
function Manager() {
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
        className="bg-[blue] flex flex-col xl:flex-row flex-wrap justify-between w-full"
        style={{ gap: CARD_GAP }}
      >
        <div
          className="bg-[yellow] flex flex-col flex-1 xl:max-w-[70%]"
          style={{ gap: CARD_GAP }}
        >
          <SiteLocationMap />
          <div
            className="bg-[red] w-full grid min-w-full lg:min-w-[250px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] !justify-start !items-start"
            style={{ gap: CARD_GAP }}
          >
            {dummyData.slice(0, 3).map((data, idx) => (
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
        <div
          className="w-full max-w-[550px] bg-[red] xl:max-w-[30%] flex flex-col sm:flex-row "
          style={{ gap: CARD_GAP }}
        >
          <PowerConsumptionChart />
          <PowerConsumptionChart />
        </div>
      </div>
    </div>
  );
}

export default Manager;
