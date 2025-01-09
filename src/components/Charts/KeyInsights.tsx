import React from "react";
import CardLayout from "../Cards/CardLayout";
import { MdElectricBolt } from "react-icons/md";
const keyInsights = [
  "DT is overloaded betweeb 9AM na 1PM",
  "Recuring low PF, (Inspect idustrial customers)",
  "No power cuts today",
];
function KeyInsights() {
  return (
    <CardLayout
      title="Key Insights"
      style="min-w-[250px] flex-1"
    >
      <div className="flex flex-col gap-6 h-full w-full">
        {keyInsights.map((insight) => (
          <div className="flex gap-4">
            <MdElectricBolt className="text-primary-yellowMain" />
            <span className="text-sm">{insight}</span>
          </div>
        ))}
      </div>
    </CardLayout>
  );
}

export default KeyInsights;
