import React from "react";

import {SignInAndSignUpContainer} from "./SignInSignOutPage.styles.jsx";

import SignIn from "../../components/sign-in/SignIn";

import SignUp from "../../components/sign-up/SignUp";

function SignInSignOutPage() {
  return (
    <>
      <SignInAndSignUpContainer className="sing-in-and-sign-up">
        <SignIn />

        <SignUp />
      </SignInAndSignUpContainer>
    </>
  );
}

export default SignInSignOutPage;
