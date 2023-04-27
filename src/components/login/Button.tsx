import React from "react";
import { AppButton } from "./LogIn.Style";
function Button(props: any) {
  const { children } = props;
  return <AppButton>{children}</AppButton>;
}

export default Button;
