/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppDateInput from "../Inputs/AppDate";
import AppSelect from "../Inputs/AppSelect";

function DownloadComponent() {
  return (
    <div className="w-full grid grid-cols-4">
      <div className="flex flex-col col-span-1 items-center justify-start">
        <AppSelect options={[]} name={""} value={""} topLabel="Site" />
        <AppDateInput
          name={""}
          value={""}
          topLabel="Start Date"
          //  @ts-ignore
          onChange={{}}
          //  @ts-ignore
          onBlur={{}}
        />
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
    </div>
  );
}

export default DownloadComponent;
