import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
//React Context is a way to manage state globally.
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SignUpPage from "./Components/signUpPage/SignUpPage";
import AskQuestionPage from "./Components/AskQuestionPage/AskQuestionPage";
import HomePage from "./Components/HomePage/HomePage";
import AnsewrPage from "./Components/HomePage/AnsewrPage";
import LandingPage from "./Components/LandingPage/LandingPage";
export const Mycontext = React.createContext();
//declare reducer function
//https://cheerful-fawn-slacks.cyclic.app/
const reducer = (state, action) => {
  switch (action) {
    case "unlockedRoute":
      return "unlockedRoute";
      case "lockedRoute":
        return "lockedRoute";
    default:
      return state;
  }
};
//app component starts

function App() {
  const [state, dispatch] = useReducer(reducer, "lockedRoute");
  const [login,setLogin] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    if (state == "lockedRoute") {
      navigate("/login");
      setLogin("SIGN IN")
    } else{
      navigate("/");
      setLogin("LOG OUT")
    }
  }, [state]);

  console.log(state);
  return (
    <Mycontext.Provider value={{ routeState: state, protectRoute: dispatch }}>
      <div className="App">
        <Header login = {login}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/askquestion" element={<AskQuestionPage />} />
          <Route path="/answer" element={<AnsewrPage />} />
          <Route path="/login" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </div>
    </Mycontext.Provider>
  );
}

export default App;
