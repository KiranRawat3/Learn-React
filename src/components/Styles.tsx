import { Card, Input, Button, Table, Spin } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import ProButton from "./ProButton";
import ProInput from "./ProInput";
import ProLoader from "./ProLoader";
import SecondaryBtn from "./SecondaryBtn";
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const StyledButton = styled(Button)`
  border-radius: 2px;
  background: ${(props) => (props.type === "primary" ? "#4caf50" : "#FFF")};
  color: ${(props) => (props.type === "primary" ? "#FFF" : "#4caf50")};
  text-align: center;
  height: 4vh;
  border: ${(props) => (props.type === "primary" ? "#000000" : "")} 2px;
`;

const StyledTitle = styled.h1`
  color: purple;
  background-color: lightpink;
`;

const StyledCard = styled(Card)`
  border-radius: 0px;
  height: 40vh;
  width: 50vw;
  box-shadow: 0px 4px 4px rgba(207, 29, 29, 0.15);
  
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  width: 500px;
`;

const StyledPrimaryBtn = styled(Button)`
  background: #4caf50;
  color: white;
  text-align: center;
  height: 4vh;

`;

const StyledSecondaryBtn = styled(Button)`
  color: #4caf50;
  text-align: center;
  height: 4vh;
  border: #4caf50 solid;
`;


// ------DATA AND COLUMNS OF TABLE-------//
const data = [
  {
    name: "Button",
    component: <ProButton>Submit</ProButton>,
    key: "1",
  },
  {
    name: "Input",
    component: <ProInput placeholder={"enter your name"}></ProInput>,
    key: "2",
  },
  {
    name: "Primary Button",
    component: <PrimaryBtn>Sign Up</PrimaryBtn>,
    key: "3",
  },
  {
    name: "Secondary button",
    component: <SecondaryBtn>Cancel</SecondaryBtn>,
    key: "4",
  },
  {
    name: "Card",
    component: <StyledCard bordered={false}  hoverable={true}>This is Card Component</StyledCard>,
    key: "5",
  },
  {
    name: "Loader",
    component: <ProLoader icon={antIcon} spinning={false}></ProLoader>,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "Component",
    dataIndex: "component",
    key: "key",
  },
];

const StyledTable :any = styled(Table)`
 .even-row {
  background-color: #aee9247a;
 }
.odd-row {
  background-color: #fb8b8b;
 }
  border: 2px solid;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items:center;
  display: flex;
  margin-left: 30vh;
  margin-top:10vh;
 

`;

const StyledLoader = styled(Spin)`
  size: large;
  color:blueviolet
   
   
`;
export {
  StyledButton,
  StyledTitle,
  StyledCard,
  StyledInput,
  StyledPrimaryBtn,
  StyledSecondaryBtn,
  StyledTable,
  StyledLoader,
  columns,
  data,antIcon
};
