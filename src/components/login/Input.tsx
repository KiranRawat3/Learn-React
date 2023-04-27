import React from "react";
import { AppInput } from "./LogIn.Style";
function Input(props: any) {
  const { placeholder } = props;
  return <AppInput placeholder={placeholder}></AppInput>;
}

export default Input;
