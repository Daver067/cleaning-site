import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/wipe.jpg";

// for the 3 images subcomponent
import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";

function Home() {
  {
    document.title = "Calgary Move Out Cleaners";
    document.getElementsByTagName("META")[3].content =
      "We will handle all of your move out cleaning needs!";
  }
  return (
    <div className="content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      ></div>

      <p className="mainP">
        <ContactForm formName="home" />
        <h2>What Is Move Out Cleaning?</h2>
        Moving out of a home can be an exciting time, but it can also be
        stressful and overwhelming. One of the most important things to take
        care of when moving out is to ensure that the home is clean and in good
        condition for the next occupants. This is where move out cleaning comes
        in. Move out cleaning is a service that is provided by professional
        cleaning companies to ensure that homes are thoroughly cleaned and ready
        for the next occupants. In Calgary, there are several cleaning companies
        that offer move out cleaning services. Move out cleaning in Calgary
        typically involves a thorough cleaning of the entire home, including all
        rooms, bathrooms, kitchen, and other areas. This cleaning process
        includes dusting, sweeping, mopping, vacuuming, and scrubbing surfaces
        to remove any dirt or grime. The cleaning company will also clean
        appliances, such as the oven and refrigerator, and ensure that they are
        left in good working condition. <br />
        <br />
        In addition to cleaning the inside of the home, move out cleaning
        services in Calgary also include cleaning the outside of the home. This
        may involve cleaning the windows, the exterior of the home, and the
        garage. The cleaning company will ensure that the home looks presentable
        and attractive to potential buyers or renters. When hiring{" "}
        <a href="https://www.calgarymoveoutcleaning.ca/" className="linkout">
          move out cleaners Calgary
        </a>
        , it is important to choose a reputable company with experience in this
        type of cleaning. A good cleaning company will provide a detailed list
        of the cleaning services they offer and will work with you to customize
        a cleaning plan that meets your needs and budget. The cost of move out
        cleaning in Calgary varies depending on the size of the home and the
        extent of the cleaning required. However, it is generally affordable and
        worth the investment to ensure that the home is left in a clean and
        presentable condition. One of the benefits of hiring a professional move
        out cleaning company in Calgary is that it can save you time and energy.
        Moving out of a home can be a stressful and time-consuming process, and
        cleaning the home yourself can add to that stress. <br />
        <br />
        By hiring a professional cleaning company, you can focus on other
        aspects of the move, such as packing and organizing, while the cleaning
        company takes care of the cleaning. Another benefit of hiring a move out
        cleaning company in Calgary is that it can help ensure that you get your
        full security deposit back. Landlords often require tenants to leave the
        home in a clean and presentable condition in order to receive their
        security deposit back. By hiring a professional cleaning company, you
        can ensure that the home is thoroughly cleaned and meets the
        requirements of your landlord. In conclusion, move out cleaning is an
        important service that is essential when leaving a home. In Calgary,
        there are several professional cleaning companies that offer move out
        cleaning services. Hiring a professional cleaning company can save you
        time and energy, ensure that your home is left in a clean and
        presentable condition, and help you get your full security deposit back.
      </p>

      <ThreeImages
        imageLeft={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Residential",
        }}
        imageCenter={{
          src: gloves,
          text: "Move Out Cleaning",
          theLink: "/Move-Out-Cleaning",
        }}
        imageRight={{
          src: vaccuum,
          text: "Commercial Cleaning",
          theLink: "/Commercial",
        }}
      />
    </div>
  );
}

export default Home;
