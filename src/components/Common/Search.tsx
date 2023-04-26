import React from 'react'
import { StyledSearchBar } from './Styles'
function Search(props:any) {
  const {placeholder,onSearch,onChange,size}=props;

  return (
    <StyledSearchBar placeholder={placeholder} onChange={onChange} onSearch={onSearch} size={size}></StyledSearchBar>
  );
}

export default Search