import React from "react";
import SitesTable from "../../Table/SitesTable";
import { CARD_GAP } from "../../../utils/constants";

function OperationSites() {
  return (
    <div className="flex flex-col w-full" style={{gap: CARD_GAP}}>
      <div className="w-full flex justify-between">
        <h1 className="text-primary-blackMain font-bold text-2xl">Site</h1>
        <div className="max-w-[80%] sm:max-w-[45%] flex-1 flex items-center justify-center border border-primary-border bg-[#E6E6E6] p-2 rounded-full h-[2.5rem]">
          <input
            type="search"
            placeholder="Search for asset name, site and more"
            className="w-full h-full p-2 outline-none border-none bg-inherit placeholder:text-primary-placeholder placeholder:text-sm"
          />
        </div>
      </div>
      <div className="w-full">
        <SitesTable />
      </div>
    </div>
  );
}

export default OperationSites;
