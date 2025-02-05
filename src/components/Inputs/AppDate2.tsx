import React from "react";

function AppDate2({ label, value, onChange, onBlur }: { label: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative  flex flex-col items-start justify-center border border-primary-border rounded-lg w-full h-[2.5rem] p-2">
      <span className="absolute top-[-20px] left-2 bg-white px-2 py-1 text-sm text-primary-blackMain">
        {label}
      </span>
      <input
        type="date"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full h-full border-none outline-none placeholder:text-primary-blackLighter cursor-pointer"
      />
    </div>
  );
}

export default AppDate2;
