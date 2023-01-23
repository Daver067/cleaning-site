import React, { useState, useEffect } from "react";
import "./CallToAction.scss";

function CallToAction() {
  return (
    <div id="CallToAction">
      <h1 className="center">Company Name</h1>
      <h3 className="center">Location</h3>
      <div className="center">
        <button>Call Us: Phone Num</button>
      </div>
      <div className="center">
        <button>Text Us: Phone Num</button>
      </div>
      <div className="center">
        <button>Email Us: Email Addy</button>
      </div>
    </div>
  );
}

export default CallToAction;
