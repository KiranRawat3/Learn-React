import { Card, Row, Col, Input, Checkbox, Button } from "antd";
import "./SignIn.css";
import logo from '../assets/login-logo.png'

function ProSignIn() {
  let username = "";
  let password = "";

  return (
    <div className="signin-div">
      <Card className="signin-card">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }}>
            <img src={logo} className="signin-image" />
            <div className="signin-heading">Login</div>
            <div className="signin-sub-heading">
              Welcome to Smart Asset Monitoring System{" "}
            </div>
            <Input
              className="signin-username"
              value={username}
              placeholder="UserId"
            ></Input>
          </Col>
          <Col xs={{ span: 24 }}>
            <Input
              className="signin-password"
              value={password}
              placeholder="Password"
            ></Input>
          </Col>
          <Checkbox className="signin-checkbox">Remember me</Checkbox>
          <Col xs={{ span: 24 }}>
            <Button className="signin-button">LOGIN</Button>
            <a href="#" className="signin-link">
              forgot User Id?
            </a>
            <a href="#" className="signin-link">
              forgot password?
            </a>
            Not Registered?
            <a href="#" className="signin-link">
              {" "}
              register here
            </a>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default ProSignIn;
