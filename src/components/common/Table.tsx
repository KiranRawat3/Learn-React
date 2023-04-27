import React, { Component } from "react"; 
import {StyledTable} from './Styles';
import Constants from "./Constants";
function Table(props: any) {
  
  const { dataSource, columns, pagination } = props;

  return (
    <StyledTable
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}>
    </StyledTable>
  );
}

export default Table;
