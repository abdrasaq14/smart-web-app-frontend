import React from "react";
import { CARD_GAP, COLORS } from "../../../utils/constants";
import EventLogTable from "../../Table/EventLogs";
import AdminCompanies from "./Home";
import Manager from "../Manager/home";
import OperationSites from "../Operations/sites";
import Operations from "../Operations/operations";
import FinanceHome from "../Finance/Home";
import AppButton from "../../Inputs/AppButton";
import { ButtonType } from "../../../enums/componentEnums";
import UsersTable from "../../Table/UsersTable";
// import RawData from "./RawData";
const COMPANY_NAME = "SBEE";
const tabs = [
  "Overview",
  "Operations",
  "Finance",
  "Log Book",
  "Users",
  "Devices",
];
function Company() {
  const tabSwitcher = (tab: string) => {
    // switch tab
    switch (tab) {
      case "Overview":
        return <Manager />;
      case "Operations":
        return <Operations />;
      case "Finance":
        return <FinanceHome />;
      case "Users":
        return <UsersTable/>;
      default:
        return <Manager />;
    }
  };
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="flex gap-2">
        <span className="text-primary-blackMain text-xl font-bold">
          {COMPANY_NAME}
        </span>
        <span className="text-primary-blackLighter ">{`>`} </span>
        <span className="text-primary-blackLighter">{activeTab}</span>
      </div>
      <div className="w-full flex flex-col gap-4 lg:flex-row justify-between ">
        <div className="flex gap-4 items-end min-w-[70%] lg:min-w-[45%] lg:max-w-[170px] border-b border-primary-border">
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
        {/* Button */}
        <div className="md:max-w-[45%]  gap-4 flex  flex-col sm:flex-row items-center justify-start  mb-2">
          <AppButton
            text="Add Devices"
            style="!bg-primary-blackMain !text-sm"
            handleClick={() => {}}
            type={ButtonType.PRIMARY}
          />
          <AppButton
            text="Add Employee"
            style="!text-sm"
            handleClick={() => {}}
            type={ButtonType.PRIMARY}
          />
        </div>
      </div>
      <div className="w-full">{tabSwitcher(activeTab)}</div>
    </div>
  );
}

export default Company;
