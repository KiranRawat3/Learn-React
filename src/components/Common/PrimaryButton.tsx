import React from 'react'
import { StyledPrimaryBtn } from './Styles';
function PrimaryButton(props:any) {
    const {children}=props;
  return (
     <StyledPrimaryBtn>{children}</StyledPrimaryBtn>
  )
}

export default PrimaryButton;