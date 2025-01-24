import React from 'react'

const AppSelect2 = ({
  label,
  options,
  value,
  name
}: {
  label: string;
    options: string[];
    value?: string;
    name?: string;
}) => {
  return (
    <div className="relative  flex flex-col items-start justify-center border border-primary-border rounded-lg w-full h-[2.5rem] p-2">
      <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-blackMain font-semibold">
        {label}
      </span>
      <select
        name={name}
        value={value}
        defaultValue={options[0]}
        className="cursor-pointer flex items-center h-full w-full justify-center border-none outline-none rounded-md  text-primary-blackLighter"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default AppSelect2