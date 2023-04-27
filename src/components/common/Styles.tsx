import { Tooltip ,Modal,Button,Table,Input,Card,Spin} from "antd";
import styled from "styled-components";
// import PrimaryButton from "./PrimaryButton";
// import Loader from "./Loader";
// import SecondaryButton from "./SecondaryButton";
// import { LoadingOutlined } from "@ant-design/icons";
import "./SignIn.css";
export const StyledButton = styled(Button)`
  border-radius: 2px;
  background: ${(props) => (props.type === "primary" ? "#4caf50" : "#FFF")};
  color: ${(props) => (props.type === "primary" ? "#FFF" : "#4caf50")};
  text-align: center;
  height: 4vh;
  border: ${(props) => (props.type === "primary" ? "#000000" : "")} 2px;
`;

export  const StyledTitle = styled.h1`
  color: purple;
  background-color: lightpink;
`;

export const StyledCard = styled(Card)`
  border-radius: 0px;
  height: 40vh;
  width: 50vw;
  box-shadow: 0px 4px 4px rgba(207, 29, 29, 0.15);
`;

export const StyledInput = styled(Input)`
  border: none;
  border-radius: 0;
  border-bottom: 2px solid black;
  width: 500px;
  margin-top: 50px;
  box-shadow:none;
  border-color:black;
 &:hover{
    border-bottom:2px solid #129489;
  }
`;

export const StyledPrimaryBtn = styled(Button)`
  background: #4caf50;
  color: white;
  text-align: center;
  height: 4vh;
`;

export const StyledSecondaryBtn = styled(Button)`
  color: #4caf50;
  text-align: center;
  height: 4vh;
  border: #4caf50 solid;
  
`;

export const StyledTable: any = styled(Table)`
  border: 2px solid;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 30vh;
  margin-top: 10vh;
  
`;

export const StyledLoader = styled(Spin)`
  size: large;
  color: blueviolet;
`;

const state = { visible: false };

export const StyledModal = styled(Modal)`
  border-radius: 2px;
  border-color: aliceblue;
`;

export const StyledTooltip = styled(Tooltip)`
  background-color: pink;
  font-size: 30px;
  margin-left: 40px;
  color: purple;
  &:hover {
    color: black;
  }
`;

export const StyledSpanTag = styled.span`
  &:hover {
    background-color: magenta;
  }
`;
