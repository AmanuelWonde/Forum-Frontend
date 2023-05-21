import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./AskQuestionPage.css";
import axios from "axios"
function AskQuestionPage() {
  const[title,setTitle] = useState()
  const[description,setDescription] = useState()
const [warning,setWarning] = useState("")
const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
if(!title){
  setWarning("* The Title must be filled")
}else{
  axios.post("https://cheerful-fawn-slacks.cyclic.app/question",{title:title,description:description})
  navigate("/")
}
  }
 return (
    <div className="AskQuestionPage">
      <div className="stepsToWrite">
        <h3>Steps to write a good qustion</h3>
        <ul>
          <li>Summerisze your problem in a one line title</li>
          <li>Describe your problem in more detail</li>
          <li>Explain what you triet and what you expected to happen</li>
          <li>Review your question and post it to the site </li>
        </ul>
      </div>
      <div className="AskForm">
        <h3>Ask a public question</h3>
        <Link to ="/answer">
        <p> Go to Answer page</p>
        </Link>
        <p>{warning}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id="title"
            placeholder="Title"
            className="title"
            onChange={e=>setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Question Description..."
            className="textarea"
            onChange={e=>setDescription(e.target.value)}

          />
          <button type="submit"> Post Your Question</button>
        </form>
      </div>
    </div>
  );
}
export default AskQuestionPage;
