import { ReactElement, useState } from "react";
import { AppInputProps } from "../../interfaces/ComponentInterfaces";

const AppInput = ({
  leftIcon: LeftIcon = null,
  rightIcon: RightIcon = null,
  placeholder = "",
  topLabel: TopLabel = null,
  bottomLabel: BottomLabel = null,
  type,
  disabled = false,
  name,
  value,
  onChange,
  onBlur,
    error,
  style,
}: AppInputProps): ReactElement => {
  const [localType, setLocalType] = useState<string>(type);

  const handlePasswordView = (type: string) => setLocalType(type);

  return (
    <>
      {TopLabel && typeof TopLabel === "string" ? (
        <span className="text-sm text-primary-blackMain">{TopLabel}</span>
      ) : (
        TopLabel
      )}
      <div
        className={`input-wrapper ${
          error ? "border-red-500" : "border-primary-border"
        }  ${style}`}
      >
        {LeftIcon && <LeftIcon size={20} className="text-accent-light3" />}
        <input
          className="input-style"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          type={type === "password" ? localType : type}
        />
        {(type === "password" &&
          (localType === "password" ? (
            <span
              onClick={() => handlePasswordView("text")}
              className="cursor-pointer text-xs text-primary-placeholder"
            >
              Show
            </span>
          ) : (
            <span
              onClick={() => handlePasswordView("password")}
              className="cursor-pointer text-xs text-primary-placeholder"
            >
              Hide
            </span>
          ))) ||
          (RightIcon && (
            <RightIcon size={20} className="text-primary-blackLighter" />
          ))}
      </div>
      {BottomLabel && typeof BottomLabel === "string" ? (
        <span className="text-sm text-primary-blackLighter">{BottomLabel}</span>
      ) : (
        BottomLabel
      )}
      {error && <span className={`text-red-500 text-sm ${error ? 'mb-5' : ''}`}>{error}</span>}
    </>
  );
};

export default AppInput;
