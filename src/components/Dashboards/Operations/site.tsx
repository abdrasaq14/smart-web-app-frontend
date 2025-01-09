import { IoChevronBack } from "react-icons/io5";
import { CARD_GAP } from "../../../utils/constants";
import BackButton from "../../feedBacks/BackButton";
import { dummyData } from "./operations";
import StatsCard from "../../Cards/statsCard";
import EnergyLossChart from "../../Charts/EnergyLoss";

function OperationSite() {
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
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
        
      </div>
    </div>
  );
}

export default OperationSite;
