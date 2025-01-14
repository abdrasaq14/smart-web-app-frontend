import React, { useState } from "react";

interface AnimatedInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border border-primary-border rounded-lg w-full h-[2.5rem] p-2">
      <div className="relative w-full h-full flex items-center justify-center">
        <label
          className={`absolute left-0 top-0 text-gray-400 text-sm transition-all duration-300 ease-in-out pointer-events-none ${
            isFocused || value
              ? "text-xs top-[-15px] left-2 bg-white !text-primary-blackMain px-2 py-1 -translate-y-2"
              : ""
          }`}
        >
          {placeholder}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full border-none outline-none  placeholder:text-sm"
        />
      </div>
    </div>
  );
};

export default AnimatedInput;
