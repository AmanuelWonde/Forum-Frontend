import React, { useState } from "react";
import "./AnswerPage.css";
import UserProfile from "./UserProfile";
import axios from 'axios'
import { Link } from "react-router-dom";
function AnsewrPage() {
  const [answer,setAnswer] = useState()
  const [warning,setWarning] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault() ;
        if(!answer){
          setWarning("*You can't post empty answer")
        }else{
          axios.post("http://localhost:1008/answer",{answer:answer})
        }
    }
  return (
    <div className="AnsewrPage">
      <div>
        <h3>Question</h3>
        <p>what's react-router-dom?</p>
        <p>how does it work</p>
      </div>
      <div>
        <hr />
        <h3>Answers From The Community</h3>
        <hr />
        <UserProfile />
        <div className="AnswerPage_input">
          <h3> Answer The Top Question</h3>
          <Link to="/askquestion">
          <p>Go to Question page</p>
          </Link>
          <form onSubmit={submitHandler}>
            <p>{warning}</p>
             <textarea name="answer" id="" cols="30" rows="10"   placeholder="Your Answer..."
              className="AnswerInput" onChange={(e)=>{setAnswer(e.target.value)
              setWarning("")}}/>
            <input
              type="submit"
              name=""
              id=""
              value="Post Your Answer"
              className="AnswerInput_submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnsewrPage;
