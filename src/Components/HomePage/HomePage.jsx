import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import UserProfile from "./UserProfile";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { Mycontext } from "../../App";

function HomePage() {
  const [userName, setUserName] = useState(1);
  const [userQuestion, setUserQuestion] = useState([]);
  const consumContext = useContext(Mycontext);
  useEffect(() => {
    axios.get("http://localhost:1008/user").then((data) => {
      setUserName(data.data.user[0].user_name);
      console.log(data.data.user[0].user_name);
      // console.log(data)
      axios.get("https://cheerful-fawn-slacks.cyclic.app/userQuestion").then((data) => {
        let result=data.data.user.reverse();
        setUserQuestion(result);
        console.log(result);
      });
    });
  }, []);

  // useEffect(()=>{

  // },[])

  return (
    <div className="HomePage">
      <div className="HomePage_ProfileWrapper">
        <div className="HomePage_ProfileWrapper_button">
          <button>
            <Link
              to="/askquestion"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ask Question
            </Link>
          </button>
          <h3>Welcome: {userName}</h3>
        </div>
        <h2>Questions</h2>
        <hr />
        {userQuestion.map((userQuestion) => {
         let profile = ( <div>  <UserProfile
          user_name={userQuestion.user_name}
          question={userQuestion.question}
        />
        <hr/>
        </div>
        )
        return profile;
        })}
      </div>
    </div>
  );
}

export default HomePage;
