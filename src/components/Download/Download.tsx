/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonType } from "../../enums/componentEnums";
import AppButton from "../Inputs/AppButton";
import AppDateInput from "../Inputs/AppDate";
import AppSelect from "../Inputs/AppSelect";

function DownloadComponent() {
  return (
    <div className="w-full flex flex-wrap items-end justify-start gap-6 lg:gap-4">
      <div className="flex flex-col min-w-[100px] max-w-[150px] flex-1 items-start ">
        <AppSelect
          options={[]}
          name={""}
          value={""}
          topLabel="Site"
          selectText="Select site(s)"
        />
      </div>
      <div className="flex flex-col min-w-[100px] max-w-[150px] flex-1 items-start overflow-x-hidden">
        <AppDateInput
          name={""}
          value={""}
          topLabel="Start Date"
          //  @ts-ignore
          onChange={{}}
          //  @ts-ignore
          onBlur={{}}
        />
      </div>
      <div className="flex flex-col min-w-[100px] max-w-[150px] flex-1 items-start ">
        <AppDateInput
          name={""}
          value={""}
          topLabel="End Date"
          //  @ts-ignore
          onChange={{}}
          //  @ts-ignore
          onBlur={{}}
        />
      </div>
      <div className="flex flex-col min-w-[100px] max-w-[150px] flex-1 items-start">
        <AppButton
          type={ButtonType.PRIMARY}
          text="Download"
          style={"p-2"}
          handleClick={() => {}}
        />
      </div>
    </div>
  );
}

export default DownloadComponent;
