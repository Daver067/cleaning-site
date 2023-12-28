import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/broom.jpg";

function Services() {
  {
    document.title = "Calgary Move Out Cleaners | Services";
    document.getElementsByTagName("META")[3].content =
      "We provide more than just move out cleaning services! We will also clean residential properties, industrial cleaning, and move in cleaning.";
  }
  return (
    <div className="content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      >
        <h1 className="header centered">Services</h1>
      </div>
      <p className="mainP">
        <ContactForm formName="services" />
      </p>
    </div>
  );
}

export default Services;
