import React, { Children } from "react";
import { StyledModal } from "./Styles";
import Button from "./Button";
import Constants  from "./Constants";

function Modal(props: any) {

  const { onOk, onCancel, onClick,children ,visible} = props;
   console.log(">>>>>Modal Props",props);
  return (
    <>
      <StyledModal
      open={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
          {children}
      </StyledModal>
    </>
  );
}

export default Modal;
