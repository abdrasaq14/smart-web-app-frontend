import { ReactElement } from "react";
import { AppInputProps } from "../../interfaces/ComponentInterfaces";

interface AppDateInputProps extends AppInputProps {
  minDate?: string; // Optional min date
  maxDate?: string; // Optional max date
}

const AppDateInput = ({
  leftIcon: LeftIcon = null,
  rightIcon: RightIcon = null,
  placeholder = "",
  topLabel: TopLabel = null,
  bottomLabel: BottomLabel = null,
  disabled = false,
  name,
  value,
  onChange,
  onBlur,
  error,
  style,
  minDate,
  maxDate,
}: AppDateInputProps): ReactElement => {
  return (
    <div className="w-full">
      {TopLabel && typeof TopLabel === "string" ? (
        <span className="text-sm text-primary-blackMain">{TopLabel}</span>
      ) : (
        TopLabel
      )}
      <div
        className={`input-wrapper ${
          error ? "border-red-500" : "border-primary-border"
        } ${style}`}
      >
        {LeftIcon && <LeftIcon size={20} className="text-primary-blackLighter" />}
        <input
          className="input-style"
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          min={minDate}
          max={maxDate}
        />
        {RightIcon && (
          <RightIcon size={20} className="text-primary-blackLighter" />
        )}
      </div>
      {BottomLabel && typeof BottomLabel === "string" ? (
        <span className="text-sm text-primary-blackLighter">{BottomLabel}</span>
      ) : (
        BottomLabel
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default AppDateInput;
