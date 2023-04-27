import React from "react";
import { StyledLoader } from "./Styles";

function Loader(props: any) {
  const {icon }= props;
  
  return <StyledLoader >{icon}</StyledLoader>;
}

export default Loader;
