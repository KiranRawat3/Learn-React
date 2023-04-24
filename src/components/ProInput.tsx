import React from 'react'
import { StyledInput } from './Styles'
import { constants } from 'buffer'

function ProInput(props:any) {
    const {placeholder}=props;
  return (
   
    <StyledInput placeholder={placeholder}></StyledInput>
  )
}

export default ProInput