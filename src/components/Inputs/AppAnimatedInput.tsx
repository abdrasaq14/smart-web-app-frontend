/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface AnimatedInputProps {
  placeholder: string;
  value: string;
  onChange?: any;
  onBlur?: any;
  type?: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  isErrored?: boolean;
  errorMessage?: any;
  isTouched?: boolean;
  disabled?: boolean;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  isErrored,
  errorMessage,
  isTouched,
  type = 'text',
  disabled
}) => {
  const [isFocused, setIsFocused] = useState(false);
console.log('AnimatedDisabled', disabled);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!value) {
      setIsFocused(false);
    }
    // onBlur(e); // Trigger Formik's `handleBlur`
  };
console.log("AnimatedInput", isErrored, isTouched, errorMessage);
  return (
    <div
      className={`w-full h-[3rem] flex flex-col items-start gap-0 ${isErrored && isTouched ? "mb-6" : ""}`}
    >
      <div
        className={`flex flex-col items-center justify-center border ${
          isErrored && isTouched ? "border-red-500" : "border-primary-border"
        } rounded-lg w-full h-[80%] max-h-[80%] p-2 ${disabled ? 'cursor-not-allowed' : ''} disabled:bg-slate-400`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <label
            className={`absolute left-0 top-0 text-gray-400 text-sm transition-all duration-300 ease-in-out pointer-events-none ${
              isFocused || value
                ? " top-[-15px] left-2 bg-white !text-primary-blackMain px-2 py-1 -translate-y-2 font-semibold"
                : ""
            }`}
          >
            {placeholder}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            disabled={disabled}
            className="w-full border-none outline-none  placeholder:text-sm disabled:cursor-not-allowed"
          />
        </div>
      </div>
      {isErrored && isTouched && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default AnimatedInput;
