import React from "react";

import "./custombutton.styles.scss";

import { CustomButtonContainer } from "./CustomButton.styles";

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
