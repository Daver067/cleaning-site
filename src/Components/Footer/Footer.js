import React from "react";
import Legal from "../../images/icons/legal.png";
import Map from "../../images/icons/map.png";
import Phone from "../../images/icons/phone.png";

function Footer() {
  return (
    <div id="footer">
      <div className="location">
        <img src={Map} alt="map"></img>
        <p>Calgary, AB, Canada</p>
      </div>
      {/*

      <div className="legal">
        <img src={Legal} alt="legal"></img>
        <p>
          Legal Disclaimer: This is a referral based site. All Work is completed
          by professionals.
        </p>
        <p>© The Daver gets to move to CostaRica project 2022</p>
      </div>
      <div className="call">
        <img src={Phone} alt="phone"></img>
        <p>Call us: (555) 555-5555</p>
      </div>
      */}
    </div>
  );
}

export default Footer;
