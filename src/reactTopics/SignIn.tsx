import React, { useEffect, useState } from "react";
import {
  Image,
  Row,
  Col,
  Input,
  Card,
  Button,
  Badge,
  Form,
  FormInstance,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  EyeTwoTone,
  QqOutlined,
} from "@ant-design/icons";
import "./SignIn.css";
import logo from "./innobit.png";
import envTag from "./envTag.png";
import Password from "antd/es/input/Password";
//const [Data,SetData]=useState(""
const SignIn: React.FC = () => {
  //   function onChange(event:any){
  //     console.log(event.target.value)
  // }
  // function onSubmit(event:any){
  // console.log(" username: " +event.target.username+ " password:" +event.target.pass);
  // }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Username", { username }, "Password", { password });
  }
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    console.log(password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="signIn">
        <Card className="signIncard">
          <div>
            <figure>
              <img src={envTag} className="envimg" />
            </figure>
          </div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <img src={logo} className="signInImg" />
              <h2 className="h2">Sign In</h2>
              <div>
                <label>Username </label>
                <label style={{ color: "red" }}>*</label>
              </div>
              <Input
                className="signInUsername"
                value={username}
                placeholder="enter your username"
                onInput={handleUsernameChange}
              />
            </Col>
            <Col span={24}>
              <label>Password </label>
              <label style={{ color: "red" }}>*</label>
              {/* <Input className='pass'  type="password" placeholder="enter your password" /> */}
              <Input.Password
                className="signInPass"
                value={password}
                placeholder="enter your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onInput={handlePasswordChange}
              />
            </Col>
            <Col span={24}>
              <button className="signInButton" type="submit">
                Sign In
              </button>
            </Col>
          </Row>
        </Card>
      </div>
    </form>
  );
};
export default SignIn;
