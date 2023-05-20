import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMediaWrapper">
        <img
          src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
          alt=""
        />
        <div>
          <FacebookIcon style = {{color:'white'}}/>
          <InstagramIcon style = {{color:'white'}}/>
          <YouTubeIcon style = {{color:'white'}}/>
        </div>
      </div>
      <div className="usefulLink">
        <h3>Useful Link</h3>
        <ul>
          <li>How it works</li>
          <li> Terms of service</li>
          <li> Privacy policy</li>
        </ul>
      </div>
      <div>
        <h3>Contact info</h3>
        <ul>
          <li>Evangadi Network</li>
          <li> support@evangadi.com</li>
          <li> +1-202-386-2702</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
