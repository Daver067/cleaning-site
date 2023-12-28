import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/broom.jpg";

import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";
import commercialWash from "../../images/commercialWash.jpg";

function Commercial() {
  {
    document.title = "Calgary Move Out Cleaners | Commercial Cleaning";
    document.getElementsByTagName("META")[3].content =
      "Maintaining a clean and hygienic workplace is essential for the success of any business. A clean and organized workspace not only creates a positive impression on clients and customers but also promotes the health and wellbeing of employees.";
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
        <h1>Do I need a Professional Cleaner?</h1>
        Maintaining a clean and hygienic workplace is essential for the success
        of any business. A clean and organized workspace not only creates a
        positive impression on clients and customers but also promotes the
        health and wellbeing of employees. While some businesses may opt to
        handle their cleaning needs in-house, hiring a professional cleaning
        company for commercial cleaning services has numerous advantages. In
        this article, we will discuss why it is beneficial to use a professional
        company for commercial cleaning.
        <h3>Expertise and Experience</h3>
        Professional cleaning companies specialize in providing commercial
        cleaning services and have the expertise and experience needed to clean
        all types of commercial spaces. They have trained and experienced staff
        who understand the cleaning requirements of different types of
        businesses and can provide customized cleaning solutions tailored to the
        specific needs of each business. Professional cleaning companies also
        have access to the latest cleaning technologies and equipment, enabling
        them to clean more efficiently and effectively.
        <h3>Improved Health and Safety</h3>A clean and hygienic workplace is
        essential for the health and safety of employees and clients.
        Professional cleaning companies have the knowledge and experience to
        ensure that all areas of a commercial space are cleaned and disinfected
        thoroughly. This helps to reduce the spread of germs and bacteria, which
        can lead to illnesses and infections. Regular cleaning and disinfection
        can also reduce the risk of accidents and injuries caused by slippery
        floors or other hazards.
        <h3>Increased Productivity</h3>A clean and organized workspace can have
        a positive impact on employee productivity. A cluttered and dirty
        workspace can be distracting and can affect the morale of employees,
        leading to decreased productivity. By hiring a professional cleaning
        company, businesses can ensure that their workspace is always clean,
        organized, and conducive to productivity. A clean workspace can also
        improve employee satisfaction, leading to reduced turnover rates and
        increased employee retention. Cost-Effective While some businesses may
        opt to handle their cleaning needs in-house, this can be time-consuming
        and expensive. Hiring a professional cleaning company can be a
        cost-effective solution, as it allows businesses to focus on their core
        operations while leaving the cleaning to the experts. Professional
        cleaning companies can also provide customized cleaning plans that fit
        within the budget of each business, making it easier to manage cleaning
        costs.
        <h3>Flexible Services</h3>
        Professional cleaning companies offer flexible cleaning services that
        can be tailored to the specific needs of each business. Businesses can
        choose to have their commercial space cleaned on a regular basis, such
        as daily, weekly, or monthly, or they can opt for a one-time cleaning
        service. Professional cleaning companies can also provide additional
        services, such as carpet cleaning, window washing, and pressure washing,
        to meet the specific needs of each business.
        <h3>Peace of Mind</h3>
        Hiring a professional cleaning company can provide businesses with peace
        of mind, knowing that their cleaning needs are being handled by experts.
        Professional cleaning companies are insured and bonded, which means that
        businesses are protected against any damage or loss that may occur
        during the cleaning process. Professional cleaning companies also use
        environmentally friendly cleaning products and methods, ensuring that
        businesses are doing their part to protect the environment.
        <br /> <br />
        Hiring a professional cleaning company for commercial cleaning services
        is a smart choice for businesses of all sizes. With the expertise,
        experience, and specialized equipment needed to clean all types of
        commercial spaces, professional cleaning companies can ensure that
        businesses maintain a clean, hygienic, and productive workspace.
      </p>

      <ThreeImages
        imageLeft={{
          src: vaccuum,
          text: "Move In Cleaning",
          theLink: "/Move-In-Cleaning",
        }}
        imageCenter={{
          src: gloves,
          text: "Move Out Cleaning",
          theLink: "/Move-Out-Cleaning",
        }}
        imageRight={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Residential",
        }}
      />
    </div>
  );
}

export default Commercial;
