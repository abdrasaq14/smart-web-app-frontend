// import { FormikHandlers } from "formik";
import React from "react";
interface AppSelectProps {
  topLabel?: string | null;
  options: string[];
  error?: string | null;
  style?: string | null;
  disabled?: boolean;
  name: string;
  value: string;
  selectText: string;
  //   onChange: FormikHandlers["handleChange"] ;
  //   onBlur: FormikHandlers["handleBlur"];
}
const AppSelect: React.FC<AppSelectProps> = ({
  error,
  style,
  name,
    value,
  selectText,
  //   onChange,
  //   onBlur,
  options,
  topLabel,
}) => {
  return (
    <div className="w-full">
      {topLabel && typeof topLabel === "string" ? (
        <span className="text-sm text-left text-primary-blackMain">{topLabel}</span>
      ) : (
        topLabel
      )}
      <div
        className={`input-wrapper ${
          error ? "border-red-500" : "border-primary-border"
        }  ${style}`}
      >
        <select
          className="input-style"
          name={name}
          value={value}
          // onChange={onChange}
          // onBlur={onBlur}
        >
          <option value="" disabled selected>
            {selectText}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AppSelect;
