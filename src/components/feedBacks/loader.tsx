import React from "react";
import { SpinnerProps } from "../../interfaces/ComponentInterfaces";
import './loader.css'

const Loader = ({ width = 10, height = 10 }: SpinnerProps) => {
  return <div className="custom-loader" ></div>;
};

export default Loader;
