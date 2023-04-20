import { Card, Input, Button } from "antd";
import styled from "styled-components";
// import Card from "antd";
const StyledButton = styled(Button)`
  border-radius: 2px;
  background: ${(props) => (props.type === "primary" ? "#4caf50" : "#FFF") };
  color: ${(props) => (props.type === "primary" ? "#FFF": "#4caf50")};
  text-align: center;
  height: 4vh;
  display: inline-block;
  border: ${(props) => (props.type === "primary" ? "#000000" : "")} 2px;
`;

const StyleTitle = styled.h1`
  color: purple;
  background-color: lightpink;
`;

const StyleCard = styled(Card)`
  border-radius: 0px;
  border-color: red;
  height: 40vh;
  width: 50vw;
`;

const StyleInput = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
`;

export { StyledButton, StyleTitle, StyleCard, StyleInput };
