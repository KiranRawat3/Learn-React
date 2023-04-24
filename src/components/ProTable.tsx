import React, { Component } from "react";
import { StyledTable } from "./Styles";

function ProTable(props: any) {
  const { data, columns, pagination } = props;

  function getRowClassName(record: any, index: any) {
    console.log("indesxxxx", index);
    return index % 2 === 0 ? "even-row" : "odd-row";
  }
  return (
    <StyledTable
      className={(record: any, rowIndex: number) =>
        rowIndex % 2 === 0 ? 'even-row' : 'odd-row'
      }
      dataSource={data}
      columns={columns}
      pagination={pagination}
    ></StyledTable>
  );
}

export default ProTable;
