import React, { useState, useEffect } from "react";

function ContactForm() {
  return (
    <div id="contactFormContainer">
      <form id="contactForm">
        <div>
          <h3>Request a Quote!</h3>
        </div>
        <div className="nameNum">
          <label htmlFor="name">*Name: </label>
          <label htmlFor="phone">*Phone: </label>
        </div>
        <div className="nameNum">
          <input type="text" id="name" name="name" required></input>
          <input type="tel" id="phone" name="phone" required></input>
        </div>
        <div className="email">
          <label htmlFor="email">*Email: </label>
          <input type="text" id="email" name="email" required></input>
        </div>

        <div className="services">
          <label htmlFor="services">*Service Required: </label>
          <select name="services" id="services" required>
            <option value="move-out-clean">Move Out Clean</option>
            <option value="move-in-clean">Move In Clean</option>
            <option value="deep-clean">Deep Clean</option>
          </select>
        </div>
        <div className="date">
          <label htmlFor="date">*Service must be completed by: </label>
          <input type="date" id="date" name="date" required></input>
        </div>
        <div className="sqftBathroom">
          <label htmlFor="sqft">SQ FT of clean: </label>
          <label htmlFor="bathrooms">Number of Bathrooms: </label>
        </div>
        <div className="sqftBathroom">
          <input type="text" id="sqft" name="sqft"></input>
          <input type="text" id="bathrooms" name="bathrooms"></input>
        </div>
        <div className="requests">
          <label htmlFor="requests">
            Special Requests & Additional Information :{" "}
          </label>
          <input type="text" id="requests" name="requests"></input>
        </div>
        <div className="button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
