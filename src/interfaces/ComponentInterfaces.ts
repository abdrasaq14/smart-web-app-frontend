import { IconType } from "react-icons";
import { ButtonType, TextInputType } from "../enums/componentEnums";
import { ReactElement } from "react";
import { FormikHandlers } from "formik";

interface LoaderProps {
  loading?: boolean;
  width?: number;
  height?: number;
}
export interface ButtonProps {
  type: ButtonType;
  icon?: IconType | null;
  iconPosition?: "left" | "right";
  style?: string | null;
  text: string;
  loader?: LoaderProps | null;
  disabled?: boolean;
  handleClick?: () => void;
}

export interface SpinnerProps {
  width?: number;
  height?: number;
}
export interface AppInputProps {
  leftIcon?: IconType | null;
  rightIcon?: IconType | null;
  placeholder?: string;
  topLabel?: string | null | ReactElement;
  bottomLabel?: string | null | ReactElement;
  type: TextInputType;
  disabled?: boolean;
  name: string;
  value: string;
  onChange: FormikHandlers["handleChange"];
  onBlur: FormikHandlers["handleBlur"];
  error?: string | null;
  style?: string | null;
}

export interface SideNavItemChild {
  label: string;
  href: string;
}
export interface SideNavItem {
  children?: SideNavItemChild[] | undefined;
  label: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}
