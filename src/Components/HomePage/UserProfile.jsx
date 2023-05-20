import React from "react";
import "./UserProfile.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";

function UserProfile({user_name,question}) {
  
  return (
    <div className="UserProfle">
      <div className="UserProfle" >
      <div className="Profile_icon">
        <AccountCircleIcon fontSize="large" />
        <p>{user_name}</p>
      </div>
      <p className="profilQuestion">{question}</p>
      </div>
      <div className="UserProfile_arrowWrapper">
        <Link to="/answer" style={{  color: "black" }}>
        <ArrowForwardIosIcon/>
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
