import React from "react";
import { HeadingType } from "../../enums/componentEnums";

const AppHeading = ({
  text,
  type = HeadingType.MAIN,
  style,
}: {
  text: string;
  type: HeadingType;
  style?: string | null;
}) => {
  return <h1 className={`${type} ${style}`}>{text}</h1>;
};

export default AppHeading;
