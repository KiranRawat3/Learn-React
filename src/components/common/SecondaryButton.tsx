import React from 'react'
import {StyledSecondaryBtn} from './Styles';
function SecondaryButton(props:any) {
    const {children}=props;
  return (
     <StyledSecondaryBtn>{children}</StyledSecondaryBtn>
  )
}

export default SecondaryButton