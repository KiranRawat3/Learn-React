import { Card, Input, Button,Table } from "antd";
import type { ColumnsType, TableProps } from 'antd/es/table';
import styled from "styled-components";
// import Card from "antd";
const StyledButton = styled(Button)`
  border-radius: 2px;
  background: ${(props) => (props.type === "primary" ? "#4caf50" : "#FFF") };
  color: ${(props) => (props.type === "primary" ? "#FFF": "#4caf50")};
  text-align: center;
  height: 4vh;
  /* display: inline-block; */
  border: ${(props) => (props.type === "primary" ? "#000000" : "")} 2px;
`;

const StyledTitle = styled.h1`
  color: purple;
  background-color: lightpink;
`;

const StyledCard = styled(Card)`
  border-radius: 0px;
  border-color: red;
  height: 40vh;
  width: 50vw;
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  width: 500px;
`;

const StyledPrimaryBtn= styled(Button)`
  background:#4caf50;
  color: white;
  text-align: center;
  height: 4vh;
  
`;


const StyledSecondaryBtn=styled(Button)`
      color: #4caf50;
   text-align: center;
   height: 4vh;
   border:#4caf50 solid;

`;

// const StyledTable=styled(Table)`
 
  
// `;



export { StyledButton, StyledTitle, StyledCard, StyledInput ,StyledPrimaryBtn,StyledSecondaryBtn};
