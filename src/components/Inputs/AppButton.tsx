import { ReactElement } from "react";
import { ButtonProps } from "../../interfaces/ComponentInterfaces";
import { ButtonType } from "../../enums/componentEnums";
import Spinner from "../feedBacks/Spinner";

const AppButton = ({
  type,
  icon: Icon = null,
  iconPosition = "left",
  style = null,
  text,
  loader = null,
  handleClick,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      type="submit"
      {...rest}
      onClick={() =>
        type !== ButtonType.DISABLED && !loader?.loading && handleClick()
      }
      className={`flex focus:outline-none gap-2 justify-center rounded-lg items-center text-center my-auto h-12 btn ${type} font-latoRegular ${style}`}
    >
      {Icon ? (
        <>
          {iconPosition === "left" && <Icon size={14} />}
          {text}{" "}
          {loader?.loading && (
            <Spinner
              height={loader?.height}
              width={loader?.width}
            />
          )}{" "}
          {iconPosition === "right" && <Icon size={14} />}
        </>
      ) : loader?.loading ? (
        `${text}  ${(
          <Spinner
            height={loader?.height}
            width={loader?.width}
          />
        )}`
      ) : (
        text
      )}
    </button>
  );
};

export default AppButton;