import React, { useContext, useEffect, useState } from "react";
import "./SignUpPage.css";
import About from "./About";
import SignUPbackground from "./SignUPbackground";
function SignUpPage() {
  return (
    <div className="sinUpPage">
      <div className="SignUpPageComponents">
        <SignUPbackground/>
        <About/>
      </div>
    </div>
  );
}

export default SignUpPage;
