import React from "react";
import { StyledTooltip } from "./Styles";
function Tooltip(props: any) {
  const { title, arrow, ClassName, trigger,children } = props;
  console.log("tooltip>>>>>>>>>>>>>>>>>.",props);
  //const trigger = (trigger==='hover'?'blue':'Green');
  return (
    <StyledTooltip
      arrow = {arrow}
      title={title}
      trigger={trigger}
     >{children}
    </StyledTooltip>
  );
}

export default Tooltip;
