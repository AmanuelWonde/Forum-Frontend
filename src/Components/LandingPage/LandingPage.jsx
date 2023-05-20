import React, { useContext, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import { Mycontext } from "../../App";
function LandingPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [warning, setWarning] = useState("");
  const consumContext = useContext(Mycontext);
  const handleSubmit = (e) => {

    e.preventDefault();
    if(email&&password){
      axios
      .post("https://cheerful-fawn-slacks.cyclic.app/login", { email: email, password: password })
      .then((data) => {
        if (data.data == "The user in this account does't exist") {
          setWarning("*" + data.data);
        } else {
          consumContext.protectRoute("unlockedRoute");
        }
      });
    }else{
      setWarning("*Email or passwod is not filled properly");
    }
  };

  return (
    <div className="landingPage">
      <div className="landingPageWrapper">
        <form onSubmit={handleSubmit}>
          <p className="warning">{warning}</p>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value={"Login"} className="button" />
        </form>
      </div>
    </div>
  );
}
export default LandingPage;
