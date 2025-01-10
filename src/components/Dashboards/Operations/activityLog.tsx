import React from "react";
import { CARD_GAP, COLORS } from "../../../utils/constants";
import EventLogTable from "../../Table/EventLogs";
import RawData from "./RawData";

const tabs = ["Events Log", "Alerts", "User Logs", "Raw data"];
function ActivityLog() {
  const tabSwitcher = (tab: string) => {
    // switch tab
    switch (tab) {
      case "Events Log":
        return <EventLogTable />;
      case "Alerts":
        return <EventLogTable />;
      case "User Logs":
        return <EventLogTable />;
      case "Raw data":
        return <RawData/>
      default:
        return <EventLogTable />;
    }
  };
  const [activeTab, setActiveTab] = React.useState("Events Log");
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex flex-col sm:flex-row justify-between border-b border-primary-border">
        <div className="flex gap-4 items-end min-w-[70%]">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => handleTabSwitch(tab)}
              style={{
                borderBottomWidth: activeTab === tab ? "5px" : "0px",
                borderColor: activeTab === tab ? COLORS.PRIMARY : "transparent",
                fontWeight: activeTab === tab ? "bold" : "normal",
              }}
              className={`h-[2.5rem] cursor-pointer border-b text-primary-blackMain text-sm`}
            >
              {tab}
            </span>
          ))}
        </div>
        {/* search input */}
        <div className="max-w-[80%] sm:max-w-[45%] flex-1 flex items-center justify-center border border-primary-border bg-[#E6E6E6] p-2 mb-2 rounded-full h-[2.5rem]">
          <input
            type="search"
            placeholder="Search for asset name, site and more"
            className="w-full h-full p-2 outline-none border-none bg-inherit placeholder:text-primary-placeholder placeholder:text-sm"
          />
        </div>
      </div>
      <div className="w-full">{tabSwitcher(activeTab)}</div>
    </div>
  );
}

export default ActivityLog;
