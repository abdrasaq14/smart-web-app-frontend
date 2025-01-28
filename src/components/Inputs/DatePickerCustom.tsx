import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const YearPicker = ({
  isErrored,
  isTouched,
  label,
  setFieldValue,
  value,
  errorMessage,
}: {
  value: any;
  isErrored: boolean;
  isTouched: boolean;
    label: string;
    setFieldValue?: any;
  errorMessage: any;
}) => {
  return (
    <div
      className={`w-full h-[3rem] flex flex-col items-start gap-0 ${
        isErrored && isTouched ? "mb-6" : ""
      }`}
    >
      <div
        className={`${
          isErrored && isTouched ? "border-red-500" : "border-primary-border"
        } relative  flex flex-col items-start justify-center border border-primary-border rounded-lg w-full h-[80%] max-h-[80%] p-2`}
      >
        <MdOutlineKeyboardArrowDown className="cursor-pointer absolute right-2 text-sm text-primary-blackLight" />
        <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-blackMain font-semibold">
          {label}
        </span>
        <DatePicker
          selected={value}
          onChange={setFieldValue}
          showYearPicker
          dateFormat="yyyy"
          className="focus:outline-none cursor-pointer flex items-center h-full w-full justify-center border-none outline-none rounded-md  text-primary-blackLighter"
          placeholderText="Select Year"
        />
      </div>
      {isErrored && isTouched && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default YearPicker;
