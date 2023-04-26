import React from "react";
import { StyledButton } from "./Styles";


function ProButton(props: any) {
  const { children, onClick,type,disabled} = props;
  console.log(props);
  return (
      <StyledButton  disabled={disabled} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
export default ProButton;
