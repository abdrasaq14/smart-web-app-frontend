import React, { useMemo, useState } from "react";
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
import DevicesTable from "../../Table/DeviceTable";
import AddEmployeeModal from "../../Modals/AddEmployee";
import AddDeviceModal from "../../Modals/AddDeviceModal";
import { useAppSelector } from "../../../store/hooks";
import { useFetchData } from "../../../customHooks/useGetDashboardData";
import { ICompany } from "../../../utils/interfaces";
import BackButton from "../../feedBacks/BackButton";
import Loader from "../../feedBacks/loader";
import Loader2 from "../../feedBacks/loader2";

const tabs = [
  "Overview",
  "Operations",
  "Finance",
  "Log Book",
  "Users",
  "Devices",
];
function Company({ company_id }: { company_id: string }) {
  console.log("company_id", company_id);
  const tabSwitcher = (tab: string) => {
    // switch tab
    switch (tab) {
      case "Overview":
        return <Manager company_id={company_id} />;
      case "Operations":
        return <Operations company_id={company_id} />;
      case "Finance":
        return <FinanceHome company_id={company_id} />;
      case "Users":
        return <UsersTable company_id={company_id} />;
      default:
        return <DevicesTable company_id={company_id} />;
    }
  };
  const { data, isLoading, isError } = useFetchData(
    [`/company/`, "fetchCompany"],
    `/company/${company_id}`,
    {}
  );
  const companyDetails: ICompany | null = useMemo(() => {
    if (data) {
      return data as ICompany;
    }
    return null;
  }, [company_id, data]);
  console.log("companyDetails", companyDetails);
  // const activeUser = useAppSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [isDeviceModalOpen, setIsDeviceModalOpen] = useState(false);
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="flex gap-2 self-start justify-start items-center">
        <BackButton link="/dashboard/admin/companies" showBackText={false} />
        {isLoading ? (
          <div className="">
            <Loader2 />
          </div>
        ) : isError ? (
          <div className="text-red-500">Error fetching company details</div>
        ) : (
          <span className="text-primary-blackMain text-xl font-bold ml-2">
            {companyDetails && companyDetails.name}
          </span>
        )}

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
            handleClick={() => setIsDeviceModalOpen(true)}
            type={ButtonType.PRIMARY}
          />
          <AppButton
            text="Add Employee"
            style="!text-sm"
            handleClick={() => setIsEmployeeModalOpen(true)}
            type={ButtonType.PRIMARY}
          />
        </div>
      </div>
      <div className="w-full">{tabSwitcher(activeTab)}</div>
      <AddDeviceModal
        company_id={company_id}
        isModalOpen={isDeviceModalOpen}
        closeModal={() => setIsDeviceModalOpen(false)}
        enableOutsideClick={false}
        type="add"
      />
      <AddEmployeeModal
        company_id={company_id}
        isModalOpen={isEmployeeModalOpen}
        closeModal={() => setIsEmployeeModalOpen(false)}
        enableOutsideClick={false}
        type="add"
      />
    </div>
  );
}

export default Company;
