import React, { Component } from "react"; 
import {StyledTable} from './Styles';
import Constants from "./Constants";
function Table(props: any) {
  
  const { dataSource, columns, pagination ,title} = props;
  console.log("ta",title)

  return (
    <StyledTable
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      title = {title}>
    </StyledTable>
  );
}

export default Table;
