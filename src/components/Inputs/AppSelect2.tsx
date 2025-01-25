import React from "react";

const AppSelect2 = ({
  label,
  options,
  value,
  name,
  isErrored,
  errorMessage,
  isTouched,
}: {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  name?: string;
  isErrored?: boolean;
  errorMessage?: any;
  isTouched?: boolean;
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
        <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-blackMain font-semibold">
          {label}
        </span>
        <select
          name={name}
          value={value}
          defaultValue={options[0].value}
          className="cursor-pointer flex items-center h-full w-full justify-center border-none outline-none rounded-md  text-primary-blackLighter"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {isErrored && isTouched && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
export default AppSelect2;
