import React, { useReducer } from "react";
import "./SignUPbackground.css";
import LandingPage from "../LandingPage/LandingPage";
import CreateAccountForm from "../CreateAccount/CreateAccountForm";
import { Link } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case true:
      return {
        Component: <CreateAccountForm />,
        h3: "Join the network",
        p: "Already have account?",
        a: "Sign in",
        check: !state.check,
      };
    case false:
      return {
        h3: "Login to your account",
        p: "Don't have an account?",
        a: "Create a new account",
        Component: <LandingPage />,
        check: !state.check,
      };
  }
};
function SignUPbackground() {
  const [state, dispatch] = useReducer(reducer, {
    h3: "Login to your account",
    p: "Don't have an account?",
    a: "Create a new account",
    Component: <LandingPage />,
    check: true,
  });
  return (
    <div className="SignUPbackground">
      <h3>{state.h3}</h3>
      <Link>
      <p>
        {state.p}
        <small onClick={() => dispatch({ type: state.check })}>{state.a}</small>
      </p>
      </Link>
      {state.Component}
      <Link>
      <p>
        {state.p}
        <small onClick={() => dispatch({ type: state.check })}>{state.a}</small>
      </p>
      </Link>
    </div>
  );
}
export default SignUPbackground;
