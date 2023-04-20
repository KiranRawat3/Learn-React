import React from 'react'
import { StyleInput } from './Styles'
import { constants } from 'buffer'

function ProInput(props:any) {
    const {placeholder}=props;
  return (
   
    <StyleInput placeholder={placeholder}></StyleInput>
  )
}

export default ProInput