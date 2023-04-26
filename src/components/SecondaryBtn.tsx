import React from 'react'
import { StyledSecondaryBtn } from './Styles';
function SecondaryBtn(props:any) {
    const {children}=props;
  return (
     <StyledSecondaryBtn>{children}</StyledSecondaryBtn>
  )
}

export default SecondaryBtn