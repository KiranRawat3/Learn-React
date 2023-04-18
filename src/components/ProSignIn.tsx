import { Card, Row, Col, Input, Checkbox, Button } from "antd";
import React from "react";
import logo from "./innobit.png";
import "./ProSignIn.css";
function ProSignIn() {
  let username = "";
  let password = "";

  return (
    
      <div className="signIn-Div">
        <Card className="signIn-Card"  >
          
          <Row gutter={[16, 16]} >
          <Col xs={{span:24}}  >
              <img src={logo} className="signIn-Img" />
              <h1 className="Heading">Login</h1>
              <h3 className="Sub-Heading">Welcome to Smart Asset Monitoring System </h3>
              <Input
                className="signIn-Username"
                value={username}
                placeholder="UserId"
              ></Input>
            </Col> 
            <Col xs={{span:24}} >
              <Input
                className="signIn-Password"
                value={password}
                placeholder="Password:"
              ></Input>
            </Col>
            <Checkbox className="signIn-Checkbox">Remember me</Checkbox>
            <Col xs={{span:24}} >
              <Button className="signIn-Button">LOGIN</Button>
              <a href="#" className="signIn-Link">
                forgot User Id?
              </a>
              <br />
              <br />
              <a href="#" className="signIn-Link">
                forgot password?
              </a>
              <br />
              <br />
              <label>Not Registered?</label>
              <a href="#" className="signIn-Link">
                register here
              </a>
            </Col>
          </Row>
        </Card>
      </div>
    
  );
}
export default ProSignIn;
