/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import AppDateInput from "../../Inputs/AppDate";
import AppButton from "../../Inputs/AppButton";
import { ButtonType } from "../../../enums/componentEnums";
const DownloadDetail = [
  { name: "Power (KW)", value: "power" },
  { name: "Frequency (Hz)", value: "frequency" },
  { name: "Voltage (V)", value: "voltage" },
  { name: "Current (A)", value: "current" },
  { name: "Power Factor", value: "powerFactor" },
  { name: "Load type(KW)", value: "load" },
  { name: "Import Active Energy (KWH)", value: "importActiveEnergy" },
];

function RawData() {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex flex-col items-start justify-center min-h-[60%] w-[70%] max-w-[550px] bg-[#FDFDFD] gap-4 p-8 rounded-[20px] border border-[#77777733]">
        <h3 className="text-xl font-semibold">Choose Details</h3>
        <div className="w-full sm:max-w-[250px] flex flex-col gap-4">
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
        <div className="w-full flex flex-col gap-4">
          <h6 className="text-md font-semibold"> Package type</h6>
          {DownloadDetail.map((item) => (
            <label key={item.value} className="flex items-center gap-2 cursor-pointer">
              <input
                className="h-4 w-4"
                type="checkbox"
                name={item.value}
                id={item.value}
              />
              <span className="text-sm">{item.name}</span>
            </label>
          ))}
        </div>

        <div className="flex gap-4">
          <AppButton
            text="Cancel"
            type={ButtonType.SECONDARY}
            handleClick={() => {}}
          />
          <AppButton
            text="Download"
            type={ButtonType.PRIMARY}
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default RawData;
