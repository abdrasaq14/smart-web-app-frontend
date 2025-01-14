import React, { useState } from "react";
import AppSearch from "../../Inputs/AppSearch";
import { CARD_GAP, CARD_TITLE } from "../../../utils/constants";
import CompaniesTable from "../../Table/CompaniesTable";
import AnimatedInput from "../../Inputs/AppAnimatedInput";
import AppButton from "../../Inputs/AppButton";
import { ButtonType } from "../../../enums/componentEnums";
import AppSelect2 from "../../Inputs/AppSelect2";
import AppDate2 from "../../Inputs/AppDate2";

function AdminCompanies() {
  const [addCompanyInfo, setAddCompanyInfo] = useState({
    company_name: "",
    company_type: "",
    company_phone_number: "",
    company_email: "",
    company_address: "",
    renewal_date: "",
    service_type: "",
  });

  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex justify-between">
        <h1 className="text-primary-blackMain font-bold text-2xl">Companies</h1>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1">
          <AppSearch />
        </div>
      </div>
      <div
        className="w-full flex flex-col lg:flex-row flex-1 lg:min-w-[65%]"
        style={{ gap: CARD_GAP }}
      >
        <CompaniesTable />
        {/* Add company form */}
        <div className="flex flex-col max-w-[350px] lg:min-w-[30%] bg-white p-6 border border-l-primary-border shadow-lg rounded-lg">
          <h2 className={CARD_TITLE}>Add Company</h2>

          <div className="w-full gap-6 flex flex-col items-start">
            <AnimatedInput
              placeholder="Company Name"
              value={addCompanyInfo.company_name}
              onChange={(value) =>
                setAddCompanyInfo({ ...addCompanyInfo, company_name: value })
              }
            />
            <AppSelect2 label="Company Type" options={[]} />

            <AnimatedInput
              placeholder="Company Phone Number"
              value={addCompanyInfo.company_phone_number}
              onChange={(value) =>
                setAddCompanyInfo({
                  ...addCompanyInfo,
                  company_phone_number: value,
                })
              }
            />
            <AnimatedInput
              placeholder="Company email address"
              value={addCompanyInfo.company_email}
              onChange={(value) =>
                setAddCompanyInfo({ ...addCompanyInfo, company_email: value })
              }
            />
            <AnimatedInput
              placeholder="Company address"
              value={addCompanyInfo.company_address}
              onChange={(value) =>
                setAddCompanyInfo({ ...addCompanyInfo, company_address: value })
              }
            />
            <AppDate2 label="Company Renewla Date" />
            <AnimatedInput
              placeholder="Type of service"
              value={addCompanyInfo.service_type}
              onChange={(value) =>
                setAddCompanyInfo({ ...addCompanyInfo, service_type: value })
              }
            />

            <AppButton
              style={"w-full mt-4"}
              text="Add Company"
              type={ButtonType.PRIMARY}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCompanies;
