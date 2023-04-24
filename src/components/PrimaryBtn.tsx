import React from 'react'
import { StyledPrimaryBtn } from './Styles';
function PrimaryBtn(props:any) {
    const {children}=props;
  return (
     <StyledPrimaryBtn>{children}</StyledPrimaryBtn>
  )
}

export default PrimaryBtn