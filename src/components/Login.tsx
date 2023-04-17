import React, { Component } from 'react'
import './Login.css'
export default class Login extends Component {
  state:any;
  
  constructor(props:any) {
    super(props);
    this.state = {
      username:"",
      password:""
    };

   // this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handleInputChange=this.handleInputChange(this);
  }

  // handleChange(event:any){
  //   console.log(event.target.value)
  //  // this.setState({value:event.target.value});
  // }
   handleSubmit(event:any){
    const target= event.target;
    console.log('>>>>>',target);
   //this.setState({value:event.target.value})
  }



  // handleInputChange(event:any) {

  //   const target = event.target.value;
  //   const value = target.type === 'username' ? target.username : target.value;

  //   // this.setState({
  //   //   [name]: value
  //   // });
  //   console.log(">>>>>>>>>>>",target)
  //   if(target.type === 'username'){
  //     this.setState({
  //       username : target.value
  //     })
  //   }
  //   else{
  //     this.setState({
  //       username : target.value
  //     })
  //   }
  // }


  render() {
    return (
      <div className='Login'>
        <div className='LoginBox'>
            <div className='LoginHeader'>
              Sign In
            </div>
            <div className='inputs'>
              <input className='username'  type='username' name='user' placeholder='Enter your username'/>
              <input className='password' type="password" placeholder='Enter your password' />
            </div>
          <div style={{display:"flex",justifyContent:"center"}}>  
            <button className='submit' onClick={this.handleSubmit} >Login</button>
          </div>
        </div>
      </div>
    )
  }
}
