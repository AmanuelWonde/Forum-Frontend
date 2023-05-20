import React, { useReducer, useState } from "react";
import "./CreateAccountForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Mycontext } from "../../App";
//component starts here

function CreateAccountForm() {
  //hookes
  const navigate = useNavigate();
  const consumContext = useContext(Mycontext);
const [warning,setWarning] = useState("")
//assigning the input values
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [fatherName, setFatherName] = useState();

  //arrow function to handle the the form submision
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://cheerful-fawn-slacks.cyclic.app/createaccount", {
        email: email,
        password: password,
        name: name,
        username: username,
        fatherName: fatherName,
      })
      .then((data) => {
        if(data.data =="This email allready exist" || data.data=="The user name already exist"){
          console.log(data.data);
          setWarning("*"+data.data)
        }else{
          consumContext.protectRoute("unlockedRoute");
        }
      });
  };
// console.log(consumContext.routeState)
//jsx
  return (
    <div className="CreateAccountForm">
      <form onSubmit={handleSubmit}>
        <p className="warning">{warning}</p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="nameInput">
          <input
            type="text"
            className="input1"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="input2"
            placeholder="Father Name"
            name="fatherName"
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="policyand_privacy">
          I agree to the <a href="#">privacy policy</a> and
          <a href="#"> term of service</a>
        </p>
        <input type="submit" className="button" value="Agree and join" />
      </form>
    </div>
  );
}
export default CreateAccountForm;
