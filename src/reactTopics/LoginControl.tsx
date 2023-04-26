import React, { Component } from 'react'
import { Greeting } from './Greeting';
export default class LoginControl extends Component {
    state:any;
    constructor(props:any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
     
      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
    
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
        );
      }
    }
    function LoginButton(props:any) {
        return (
          <button onClick={props.onClick}>
            Login
          </button>
        );
      }
      
      function LogoutButton(props:any) {
        return (
          <button onClick={props.onClick}>
            Logout
          </button>
        );
      }

