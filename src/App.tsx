import React from "react";
import {
  AppContainer,
  AppLink,
  AppLogo,
  AppLogoContainer,
  AppLabel,
  AppTitle,
} from "./components/login/LogIn.Style";
import backgroundimg from "./assets/background.png";
import logoimage from "./assets/login-logo.png";
import Card from "./components/login/Card";
import Input from "./components/login/Input";
import Button from "./components/login/Button";
import Checkbox from "./components/login/Checkbox";

// import Logo from "./components/login/LogIn.Style"

function App() {
  return (
    <AppContainer backgroundimg={backgroundimg}>
      <Card>
        <AppLogoContainer>
          <AppLogo src={logoimage} />
          <AppTitle>Login</AppTitle>
          <AppLabel>Welcome To Smart Asset Monitoring System</AppLabel>
        </AppLogoContainer>
        <Input placeholder={"UserId"}></Input>
        <Input placeholder={"Password"}></Input>
        <Checkbox />
        <AppLabel>Remember me</AppLabel>
        <Button>LogIn</Button>
        <AppLink>Forgot UserId?</AppLink>
        <br /> <br />
        <AppLink>Forgot Password?</AppLink>
        <br /><br />
        <AppLabel>Not Registered?</AppLabel>
        <AppLink>Register</AppLink>
      </Card>
    </AppContainer>
  );
}

export default App;
