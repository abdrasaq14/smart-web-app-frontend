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
        <span className="input-label">{TopLabel}</span>
      ) : (
        TopLabel
      )}
      <div
        className={`text-primary-blackLight w-full h-12 bg-none border ${
          error ? "border-red-500" : "border-primary-border"
        }  rounded-lg py-2.5 px-2 flex justify-between items-center text-sm my-1 ${style}`}
      >
        {LeftIcon && <LeftIcon size={20} className="text-accent-light3" />}
        <input
          className="w-full bg-inherit border-none outline-none m-0 text-accent-light3 mx-2 font-satoshiRegular text-sm placeholder:text-primary-placeholder"
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
            <RightIcon size={20} className="text-primary-blackLight" />
          ))}
      </div>
      {BottomLabel && typeof BottomLabel === "string" ? (
        <span className="text-sm text-primary-blackLight">{BottomLabel}</span>
      ) : (
        BottomLabel
      )}
      {error && <span className={`text-red-500 text-sm ${error ? 'mb-5' : ''}`}>{error}</span>}
    </>
  );
};

export default AppInput;
