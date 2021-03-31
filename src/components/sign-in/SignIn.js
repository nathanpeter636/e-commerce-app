import React, { Component } from "react";


import FormInput from '../form-input/FormInput'

import CustomButton from '../custom-button/CustomButton'

import './signin.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSumbit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
      const {value, name} = event.target



      this.setState({ [name] : value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSumbit}>
          <FormInput 
          name="email" 
          type="email" 
          value={this.state.email} 
          label='email'
          handleChange={this.handleChange}
          required />
          
          <FormInput
            name="password"
            type="password"
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          

          <CustomButton type="submit" value="Submit Form">
              Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;