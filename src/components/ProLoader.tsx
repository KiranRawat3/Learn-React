import React from "react";
import { StyledLoader } from "./Styles";

function ProLoader(props: any) {
  const {icon }= props;
  
  return <StyledLoader >{icon}</StyledLoader>;
}

export default ProLoader;
