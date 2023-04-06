import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/broom.jpg";

import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";
import commercialWash from "../../images/commercialWash.jpg";

function MoveOutCleaning() {
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
        <h1>Whats Involved In Move Out Cleaning</h1>
        Moving out of a rental property can be a stressful experience, with so
        many things to do and organize. One important task is to ensure that the
        rental property is left clean and tidy for the next tenants or for the
        landlord to inspect. A move out clean, also known as an end of tenancy
        clean, is a thorough cleaning of a rental property to make sure it is in
        the best possible condition. In this article, we will discuss the
        details and specifics of how a move out clean is performed.
        <h3>Initial Assessment</h3>
        The first step in performing a move out clean is to conduct an initial
        assessment of the rental property. The cleaning company will visit the
        property to evaluate the extent of the cleaning needed and to provide a
        quote for the service. During the assessment, the cleaning company will
        inspect the property to identify any areas that require special
        attention, such as stains on carpets or upholstery, grime in the
        kitchen, or mildew in the bathroom.
        <h3>Cleaning Plan</h3>
        After the initial assessment, the cleaning company will create a
        cleaning plan tailored to the specific needs of the rental property. The
        cleaning plan will outline the tasks that need to be completed, the
        equipment and supplies required, and the estimated time needed to
        complete the job.
        <h3>Cleaning Tasks</h3>
        The cleaning tasks involved in a move out clean can vary depending on
        the size and condition of the rental property, but typically include the
        following:
        <ol>
          <li>
            Cleaning Walls, Baseboards, and Ceilings: The cleaning company will
            clean the walls, baseboards, and ceilings to remove dirt, dust, and
            cobwebs. This may involve dusting, wiping down, or washing these
            surfaces.
          </li>
          <li>
            Cleaning Carpets and Floors: The cleaning company will vacuum
            carpets and sweep or mop hard floors to remove dirt and debris. In
            some cases, the carpets may need to be professionally steam cleaned
            to remove stains and odors.
          </li>
          <li>
            Cleaning Windows and Blinds: The cleaning company will clean the
            windows, frames, and sills, and remove any smudges or fingerprints.
            The blinds will be dusted or washed to remove dust and dirt.
          </li>
          <li>
            Cleaning Kitchen: The cleaning company will clean the kitchen
            thoroughly, including the stove, oven, microwave, refrigerator,
            dishwasher, and cabinets. This may involve degreasing surfaces,
            scrubbing away food residue, and cleaning the interior of
            appliances.
          </li>

          <li>
            Cleaning Bathrooms: The cleaning company will clean the bathrooms,
            including the bathtub, shower, sink, toilet, and tiles. They will
            remove any mildew, soap scum, or stains and disinfect the surfaces.
          </li>
          <li>
            Cleaning Light Fixtures and Fans: The cleaning company will clean
            light fixtures, fans, and other fixtures to remove dust and dirt.
          </li>
          <li>
            Cleaning Outdoor Areas: If the rental property has outdoor areas,
            such as a balcony or patio, the cleaning company may also clean
            these areas, including sweeping, washing, and removing any debris.
          </li>
        </ol>
        <h3>Supplies and Equipment</h3>
        To perform a move out clean, the cleaning company will need to have the
        appropriate supplies and equipment.
        <br />
        This may include:
        <ol>
          <li>
            Cleaning Products: The cleaning company will use a range of cleaning
            products to clean the various surfaces in the rental property. These
            may include all-purpose cleaners, degreasers, disinfectants, and
            stain removers.
          </li>
          <li>
            Cleaning Tools: The cleaning company will use a range of cleaning
            tools, such as scrub brushes, sponges, mops, and vacuums, to clean
            the rental property.
          </li>
          <li>
            Personal Protective Equipment: The cleaning company may also use
            personal protective equipment, such as gloves and masks, to protect
            themselves from harsh chemicals or allergens.
          </li>
        </ol>
        <h3>Timeframe and Cost</h3>
        The timeframe and cost of a move out clean can vary depending on the
        size and condition of the rental property, as well as the specific
        cleaning tasks required. Generally, a move out clean
      </p>
      <ThreeImages
        imageLeft={{
          src: vaccuum,
          text: "Move In Cleaning",
          theLink: "/Move-In-Cleaning",
        }}
        imageCenter={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Residential",
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

export default MoveOutCleaning;
