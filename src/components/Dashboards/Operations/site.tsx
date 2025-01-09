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

function OperationSite() {
  return (
    <div
      className="flex flex-col w-full h-full min-h-full "
      style={{ gap: CARD_GAP }}
    >
      <BackButton />
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
          className="grid min-w-full lg:min-w-[200px] bg-[red]"
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
