import React from "react";
import styled from "styled-components";
import ProButton from "./components/ProButton";
import { ChildProcess } from "child_process";
import Item from "antd/es/list/Item";
import { Content } from "antd/es/layout/layout";
import {
  StyledButton,
  StyledTitle,
  StyledCard,
  StyledInput,
  StyledPrimaryBtn,
  StyledSecondaryBtn,
} from "./components/Styles";
import ProInput from "./components/ProInput";
import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";
import ProTable from "./components/ProTable";
import { title } from "process";
import { Pagination, Table } from "antd";
import ProLoader from "./components/ProLoader";
import {data,columns} from "./components/Styles";

function App() {
  
  return (
    <>
      <ProTable  rowKey="key"
      rowSelection={Selection}
      dataSource={data}
      columns={columns}
     >
        this is table
      </ProTable>
    </>
  );
}

export default App;
