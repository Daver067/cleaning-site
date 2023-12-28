import React from "react";
import backgroundImage from "../../images/contactUs.jpg";
import ContactForm from "../Form/Form";

function Contact() {
  {
    document.title = "Calgary Move Out Cleaners | Contact Us";
    document.getElementsByTagName("META")[3].content =
      "As a professional cleaning company, we believe that contacting us can provide many benefits for individuals and businesses alike.";
  }
  return (
    <div className="contact content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      >
        <h2 className="header centered">Contact</h2>
      </div>

      <p className="mainP">
        <ContactForm formName="home" />
        <h2>Why Choose Us?</h2>
        As a professional cleaning company, we believe that contacting us can
        provide many benefits for individuals and businesses alike. Whether you
        need a one-time deep cleaning or ongoing maintenance, we have the
        expertise and equipment to ensure that your space is thoroughly cleaned
        and disinfected. By reaching out to us, you can save time and effort
        while also improving the health and safety of your environment. We are
        grateful for the opportunity to provide our cleaning services and help
        create a cleaner, safer, and more enjoyable space for our clients. So,
        if you're looking for a reliable and professional cleaning service,
        contact us today and experience the benefits of a clean and healthy
        environment.
      </p>
    </div>
  );
}

export default Contact;
