import React from "react";

function AppSearch() {
  return (
    <div className="flex items-center justify-center border border-primary-border bg-[#E6E6E6] p-2 rounded-full h-[2.5rem]">
      {" "}
      <input
        type="search"
        placeholder="Search for asset name, site and more"
        className="w-full h-full p-2 outline-none border-none bg-inherit placeholder:text-primary-placeholder placeholder:text-sm"
      />
    </div>
  );
}

export default AppSearch;
