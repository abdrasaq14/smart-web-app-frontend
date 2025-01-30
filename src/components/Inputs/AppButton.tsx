import { ReactElement } from "react";
import { ButtonProps } from "../../interfaces/ComponentInterfaces";
import { ButtonType } from "../../enums/componentEnums";
import Loader from "../feedBacks/loader";

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
      onClick={(e) => {
        e.preventDefault();
        if (type !== ButtonType.DISABLED && !loader?.loading && handleClick) {
          handleClick();
        }
      }}
      className={`flex focus:outline-none gap-2 justify-center rounded-lg items-center text-center my-auto h-10 ${type} ${style}`}
    >
      {Icon ? (
        <>
          {iconPosition === "left" && <Icon size={14} />}
          {text}{" "}
          {loader?.loading && (
            <Loader height={loader?.height} width={loader?.width} />
          )}{" "}
          {iconPosition === "right" && <Icon size={14} />}
        </>
      ) : loader?.loading ? (
        <>
          {text}
          <Loader height={loader?.height} width={loader?.width} />
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default AppButton;
