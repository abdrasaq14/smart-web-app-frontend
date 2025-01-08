import React from "react";
import CardLayout from "../Cards/CardLayout";
const districts = [
  {
    title: "District A",
    percentage: 50,
  },
  {
    title: "District B",
    percentage: 30,
  },
  {
    title: "District C",
    percentage: 20,
  },
];
function PowerConsumptionChart() {
  return (
    <CardLayout
      title="Power Consumption by District"
      style="min-w-[300px] lg:max-w-[300px] flex-1"
    >
      <div className="flex flex-col gap-6 h-[90%] w-full">
        {districts.map((district) => (
          <Districts title={district.title} percentage={district.percentage} />
        ))}
      </div>
    </CardLayout>
  );
}

const Districts = ({
  title,
  percentage,
}: {
  title: string;
  percentage: number;
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <span className="mb-2 font-semibold">{title}</span>

      {/* Progress bar container */}
      <div className="relative w-full h-4 bg-primary-border rounded-full overflow-hidden">
        {/* Progress bar (yellow part) */}
        <div
          className="absolute top-0 left-0 h-full bg-primary-yellowMain rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PowerConsumptionChart;
