import React from "react";

import "./SignInSignOutPage.styles.scss";

import SignIn from "../../components/sign-in/SignIn";

import SignUp from "../../components/sign-up/SignUp";

function SignInSignOutPage() {
  return (
    <>
      <div className="sing-in-and-sign-up">
        <SignIn />

        <SignUp />
      </div>
    </>
  );
}

export default SignInSignOutPage;
