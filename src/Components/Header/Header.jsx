import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../../App";
function Header({ login }) {
  const consumContext = useContext(Mycontext);
  const [link, setLink] = useState();
  const navigate = useNavigate()
  const handelButton = () => {
    consumContext.protectRoute("lockedRoute");
  };
  useEffect(() => {
    if (consumContext.routeState == "unlockedRoute") {
      setLink("/");

    }else{
      navigate("/")
    }

  }, []);
  return (
    <div className="Header">
      <div className="logoWrapper">
        <div>
          <Link to={link}>
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt=""
            />
          </Link>
        </div>
        <div className="logoWrapper_textWrapper">
          <Link  style={{ textDecoration: "none", color: "black" }}>
            <h3>Home</h3>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }}>
            <h3>How it works</h3>
          </Link>
          <div onClick={handelButton}>
            <Link to="/login">
              <button>{login}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
