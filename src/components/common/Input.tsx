import React from 'react'
import { StyledInput } from './Styles'
import { constants } from 'buffer'

function Input(props:any) {
    const {placeholder,bordered}=props;
  return (
   
    <StyledInput placeholder={placeholder} bordered={bordered}></StyledInput>
  )
}

export default Input