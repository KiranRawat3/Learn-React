import React from "react";
import { AppCard } from "./LogIn.Style";
function Card(props: any) {
  const { children } = props;
  return <AppCard>{children}</AppCard>;
}

export default Card;
