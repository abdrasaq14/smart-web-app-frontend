// import { FormikHandlers } from "formik";
import React from "react";
interface AppSelectProps
{
    topLabel?: string | null 
  options: string[];
  error?: string | null;
  style?: string | null;
  disabled?: boolean;
  name: string;
  value: string;
//   onChange: FormikHandlers["handleChange"] ;
//   onBlur: FormikHandlers["handleBlur"];
}
const AppSelect: React.FC<AppSelectProps> = ({
  error,
  style,
  name,
  value,
//   onChange,
//   onBlur,
    options,
  topLabel
}) => {
  return (
    <div
      className={`input-wrapper ${
        error ? "border-red-500" : "border-primary-border"
      }  ${style}`}
    >
      {topLabel && typeof topLabel === "string" ? (
        <span className="text-sm text-primary-blackMain">{topLabel}</span>
      ) : (
        topLabel
      )}
      <select
        className="w-full bg-inherit border-none outline-none m-0 text-accent-light3 mx-2 font-satoshiRegular text-sm placeholder:text-primary-placeholder"
        name={name}
        value={value}
        // onChange={onChange}
        // onBlur={onBlur}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppSelect;
