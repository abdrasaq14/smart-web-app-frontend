import React from "react";
import { ERRORMESSAGE } from "../../utils/utils";
import { errorImage } from "../../assets/layout";

function CardError({ message, style }: { message?: string, style?: string }) {
  return (
    <div className="flex flex-col  justify-center items-center h-full w-full">
      <img
        src={errorImage}
        alt="unable to fetch data"
        className={`max-h-[150px] ${style}`}
      />
      <span className="font-semibold">{message || ERRORMESSAGE}</span>
    </div>
  );
}

export default CardError;
