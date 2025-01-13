import React from "react";
import SitesTable from "../../Table/SitesTable";
import { CARD_GAP } from "../../../utils/constants";
import AppSearch from "../../Inputs/AppSearch";

function OperationSites() {
  return (
    <div className="flex flex-col w-full" style={{ gap: CARD_GAP }}>
      <div className="w-full flex justify-between">
        <h1 className="text-primary-blackMain font-bold text-2xl">Site</h1>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1">
          <AppSearch />
        </div>
      </div>
      <div className="w-full">
        <SitesTable />
      </div>
    </div>
  );
}

export default OperationSites;
