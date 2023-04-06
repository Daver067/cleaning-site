import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/broom.jpg";

import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";
import commercialWash from "../../images/commercialWash.jpg";

function MoveInCleaning() {
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
        <h1>What's The Purpose Of Move In Cleaning?</h1>
        <h3>A Fresh Start</h3>
        One of the most significant advantages of hiring a move-in cleaner is
        that it provides a fresh start. Even if your new home looks clean at
        first glance, there may be hidden dust, dirt, and grime that can
        accumulate over time. A professional move-in cleaner can thoroughly
        clean every nook and cranny of your new home, ensuring that it is fresh
        and ready for you to move in.
        <h3>Time-Saving</h3>
        Moving into a new home can be time-consuming and overwhelming, leaving
        you with little time to clean. Hiring a move-in cleaner can save you
        valuable time and energy, allowing you to focus on unpacking and
        settling into your new home. A professional move-in cleaner can quickly
        and efficiently clean your new home, allowing you to move in as soon as
        possible.
        <h3>Efficient and Thorough Cleaning</h3>A professional move-in cleaner
        has the expertise, equipment, and cleaning products to ensure that your
        new home is cleaned thoroughly and efficiently. They have the knowledge
        and experience needed to clean every area of your new home, including
        hard-to-reach spaces, such as behind appliances and furniture. A move-in
        cleaner can also ensure that your new home is sanitized, reducing the
        risk of germs and bacteria.
        <h3>Elimination of Allergens</h3>
        Moving into a new home can expose you to a new environment that may
        contain allergens and irritants that can affect your health. A
        professional move-in cleaner can eliminate these allergens by cleaning
        your new home thoroughly, including carpets, upholstery, and drapes. A
        move-in cleaner can also use eco-friendly cleaning products that are
        safe for you and your family.
        <h3>Peace of Mind</h3>
        Moving into a new home can be stressful, and having a clean and hygienic
        home can provide peace of mind. A move-in cleaner can ensure that your
        new home is clean and sanitized, reducing the risk of illnesses and
        infections. A clean home can also provide a sense of calm and comfort,
        making your move-in experience more enjoyable.
        <h3>Customized Services</h3>A move-in cleaner can provide customized
        cleaning services tailored to your specific needs. Whether you need a
        general cleaning or specialized services, such as carpet cleaning or
        window washing, a move-in cleaner can provide customized services that
        fit your requirements and budget.
        <h3>Cost-Effective</h3>
        Hiring a move-in cleaner can be a cost-effective solution, as it can
        save you time and energy while ensuring that your new home is clean and
        hygienic. A move-in cleaner can also provide customized cleaning plans
        that fit within your budget, making it easier to manage your move-in
        costs.
        <br /> <br />
        Hiring a move-in cleaner can provide numerous benefits, including a
        fresh start, time-saving, efficient and thorough cleaning, elimination
        of allergens, peace of mind, customized services, and
        cost-effectiveness. A move-in cleaner can ensure that your new home is
        clean and ready for you to move in, making your move-in experience more
        enjoyable and stress-free.
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
          src: commercialWash,
          text: "Commercial Cleaning",
          theLink: "/Commercial",
        }}
      />
    </div>
  );
}

export default MoveInCleaning;
