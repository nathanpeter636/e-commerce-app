import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/FormInput";

import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password no matchy");

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({

        displayName: "",
      email: "",
      password: "",
      confirmPassword: "",

      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
      const { name, value} =event.target 

      this.setState({[name] : value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="Title">I already have an account</h2>

        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
