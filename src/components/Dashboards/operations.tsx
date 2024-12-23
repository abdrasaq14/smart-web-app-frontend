import React from "react";
import StatsCard from "../Cards/statsCard";
const GAP = "20px";

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
      style={{ gap: GAP }}
    >
      {/* stats wrapper */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]" style={{ gap: GAP }}>
        {dummyData.map((data, index) => (
          <StatsCard
            title={data.title}
            value={data.value}
            isError={data.isError}
            isLoading={data.isLoading}
          />
        ))}
      </div>

    </div>
  );
}

export default Operations;
