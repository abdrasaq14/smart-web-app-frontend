import React from "react";
import { noDataImage } from "../../assets/layout";
import { NODATAMESSAGE } from "../../utils/utils";

function NoContent({ message }: { message?: string }) {
  return (
    <div className="flex flex-col  justify-center items-center h-full w-full">
      <img src={noDataImage} alt="No data" className="max-h-[150px]" />
      <span className="font-semibold">{message || NODATAMESSAGE}</span>
    </div>
  );
}

export default NoContent;
