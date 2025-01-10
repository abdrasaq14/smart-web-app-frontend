/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import AppDateInput from "../../Inputs/AppDate";

function RawData() {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex flex-col items-start justify-center min-h-[60%] w-[70%] max-w-[550px] bg-[#FDFDFD] gap-4 p-8 rounded-[20px] border border-[#77777733]">
        <h3 className="text-xl font-semibold">Choose Details</h3>
        <div className="w-full sm:max-w-[350px] flex flex-col gap-4">
          <AppDateInput
            name={""}
            value={""}
            style={"!border-primary-border"}
            topLabel="Start Date"
            //  @ts-ignore
            onChange={{}}
            //  @ts-ignore
            onBlur={{}}
          />
          <AppDateInput
            name={""}
            style={"!border-primary-border"}
            value={""}
            topLabel="End Date"
            //  @ts-ignore
            onChange={{}}
            //  @ts-ignore
            onBlur={{}}
          />
        </div>
      </div>
    </div>
  );
}

export default RawData;
