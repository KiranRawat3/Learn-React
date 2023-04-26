import React from "react";
import styled from "styled-components";
import ProButton from "./components/ProButton";
import { ChildProcess } from "child_process";
import Item from "antd/es/list/Item";
import { Content } from "antd/es/layout/layout";
import {
  StyledButton, StyledTitle, StyledCard, StyledInput ,StyledPrimaryBtn,StyledSecondaryBtn
} from "./components/Styles";
import ProInput from "./components/ProInput";
import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";
//import  './components/ProButton.css';
//import Login from './components/Login';
// //import {useState} from 'react';
// import SignIn from './components/SignIn';
//import ProSignIn from './components/ProSignIn';
//import Antd from './components/Antd';
// import DemoInput from './';
//import Hello from './formatName';
// import { Greeting } from './Greeting';
// import { Car} from './Car';
// import EssayForm from './EssayForm';
// import LoginControl from './LoginControl';
// import FormatName from './FormatName';
// import NumberList from './NumberList';
//import NameForm from './NameForm';
//import Reservation from './Reservation';
//mport DemoInput from './DemoInput';
// import Reducer from './Hooks/ReducerHook';
// import Counter from './Hooks/Counter';
// import Context from './Hooks/Context';

function App() {
  return (
    <>
  

      {/* -----------------------------------------RESUABLE BUTTON------------------------------------*/}

      {/* <ProButton
        type={"primary"}
        onClick={() => {
          alert("first button got clicked");
        }}
      >
        <h3>Submit</h3>
      </ProButton>
      <ProButton className="btn-Secondary">
        <h3>Delete</h3>
      </ProButton>
      <ProButton
        
        onClick={() => {
          console.log("second button got clicked");
        }}
      >
        <h3>Save</h3>
      </ProButton> */}


      {/*----------------------------------------------STYLE COMPONENTS-------------------------------- */}


      <StyledCard>
        hellooo
          <br />
          <br /> 
        <StyledButton type={"primary"}>styled Component</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton>styled Component</StyledButton>
        <div>
          <br />
        </div>
        <label>Username</label>
        <StyledInput placeholder="enter your username"></StyledInput>
        <br /> 
        <StyledButton type={"primary"}>styled Component</StyledButton>
         <br/><br/>
       <ProButton
        type={"secondary"} disabled={"true"}
        onClick={() => {
          alert("first button got clicked");
        }}
        >
        Submit
        </ProButton>
        <br/><br/>
       <ProButton type={"secondary"}>
        Delete
      </ProButton>
      <br/>
      <br/>
      <ProButton
        onClick={() => {
          console.log("second button got clicked");
        }}
      >
        Save
      </ProButton>
      <StyledTitle>my first style component</StyledTitle>
      <ProInput placeholder={"enter your name"}></ProInput>
      <ProInput placeholder={"enter your phone number"}></ProInput>
      <ProInput placeholder={"enter your email"}></ProInput><br/><br/>

     <PrimaryBtn>Sign Up</PrimaryBtn>
     <SecondaryBtn>Cancel</SecondaryBtn>

      </StyledCard>




      {/*------ -------------------------------PROJECT SIGNIN------------------------------------------- */}

     
     
      {/* <ProSignIn/> */}





      {/*------------------------------------- REACT TOPICS---------------------------------------------- */}
      {/* <SignIn/>  */}
      {/* <Login/>  */}
      {/* <Reservation /> */}
      {/* <Greeting isLoggedIn = {false}/> */}
      {/* <Car brand={'BMW'}/>
       <EssayForm/>
       <LoginControl/> */}
      {/* <FormatName /> */}
      {/* <NameForm/>  */}
      {/* <Antd/>{/* <Login/> */}
      {/* <DemoInput /> */}
      {/* <Antd/> */}
      {/* <Hooks />
      {/* <Counter /> */}
      {/* <Context/> */}
      {/* <Ref/> */}
      {/* <Reducer/> */}
    </>
  );
}

export default App;
