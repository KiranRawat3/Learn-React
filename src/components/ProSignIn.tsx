import { Card, Row, Col, Input, Checkbox, Button } from "antd";
import React from "react";
import logo from "./innobit.png";
import "./ProSignIn.css";
function ProSignIn() {
  let username = "";
  let password = "";

  return (
    <>
      <div className="signIn">
        <Card className="signIncard">
          <div></div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <img src={logo} className="signInImg" />
              <h1 className="h1">Login</h1>
              <h3 className="h3">Welcome to Smart Asset Monitoring System </h3>
              <Input
                className="signInUsername"
                value={username}
                placeholder="UserId"
              ></Input>
            </Col>
            <Col span={24}>
              <Input
                className="signInPass"
                value={password}
                placeholder="Password:"
              ></Input>
            </Col>
            <Checkbox className="signInCheck">Remember me</Checkbox>
            <Col span={24}>
              <Button className="signInButton">LOGIN</Button>
              <a href="#" className="signInLink">
                forgot User Id?
              </a>
              <br />
              <br />
              <a href="#" className="signInLink">
                forgot password?
              </a>
              <br />
              <br />
              <label>Not Registered?</label>
              <a href="#" className="signInLink">
                register here
              </a>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
export default ProSignIn;
