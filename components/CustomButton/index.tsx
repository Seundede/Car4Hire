"use client";
import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, containerStyles, handleClick }:CustomButtonProps) => {
  return (
    <button className={`outline-none py-3 px-6 ${containerStyles}`} onClick={handleClick }>
      {title}
    </button>
  );
};

export default CustomButton;
