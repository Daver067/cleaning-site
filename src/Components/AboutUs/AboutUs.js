import React from "react";
import backgroundImage from "../../images/windowWash.jpg";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";

import commercialWash from "../../images/commercialWash.jpg";

import ThreeImages from "../miniComponents/threeImages";
import ImageBesideText from "../miniComponents/imageBesideText";

function AboutUs() {
  return (
    <div className="content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      >
        <h2 className="header centered">About Us</h2>
      </div>
      <p className="mainP">
        <h2>How We Shine</h2>
        As a cleaning company based in Calgary, we understand the challenges of
        attracting new customers and standing out in a crowded marketplace. In
        order to grow our business and impress potential clients, we have
        implemented several strategies that have proven to be effective. In this
        article, we will share some of our best tips for creating a professional
        image, building a strong online presence, and delivering exceptional
        cleaning services.
        <h3>Deliver Exceptional Cleaning Services</h3>
        Ultimately, the success of any cleaning business is dependent on the
        quality of its services. At our cleaning company, we take great pride in
        delivering exceptional cleaning services that meet and exceed our
        customers' expectations. This means paying attention to every detail,
        using high-quality cleaning products and equipment, and ensuring that
        our staff is well-trained and professional at all times. We also offer
        customized cleaning plans tailored to each customer's specific needs and
        preferences, ensuring that they receive the exact level of service they
        require.
        <h3>Offer Competitive Pricing and Discounts</h3>
        In order to attract new customers, it's important to offer competitive
        pricing and discounts that make your services more affordable and
        accessible. At our cleaning company, we offer transparent pricing and
        provide detailed quotes upfront so that customers know exactly what they
        can expect to pay. We also offer discounts for recurring cleaning
        services and special promotions during peak seasons to incentivize new
        customers to try our services.
        <h3>Provide Excellent Customer Service</h3>
        Finally, providing excellent customer service is crucial for building
        long-term relationships with customers and ensuring that they continue
        to use your services. This means being responsive to customer inquiries
        and feedback, addressing any issues or concerns in a timely and
        professional manner, and going above and beyond to exceed their
        expectations. At our cleaning company, we prioritize customer
        satisfaction and take every opportunity to show our customers that we
        value their business and appreciate their trust in us.
        <h3>Create a Professional Image</h3>
        As a professional cleaning company, it's important to create a
        professional image that inspires confidence in potential clients. This
        starts with having a well-designed website that showcases your services
        and provides easy access to contact information. We also recommend
        investing in branded uniforms for your staff and company vehicles that
        prominently display your logo. This not only creates a consistent brand
        image but also helps to establish your company as a reputable and
        reliable service provider.
        <h3>Build a Strong Online Presence</h3>
        In today's digital age, having a strong online presence is essential for
        any business looking to attract new customers. This means optimizing
        your website for search engines, actively engaging with customers on
        social media, and utilizing online directories and review platforms. At
        our cleaning company, we have worked hard to build a robust online
        presence by regularly posting cleaning tips and industry news on our
        social media accounts, responding promptly to customer inquiries and
        feedback, and consistently receiving positive reviews from satisfied
        customers.
        <h3>Conclusion</h3>
        In conclusion, as a cleaning company based in Calgary, we have found
        that creating a professional image, building a strong online presence,
        delivering exceptional cleaning services, offering competitive pricing
        and discounts, and providing excellent customer service are all
        essential for attracting new customers and growing our business. By
        consistently implementing these strategies, we have been able to impress
        potential clients and establish ourselves as a reputable and reliable
        cleaning service provider in the Calgary area.
      </p>

      <ThreeImages
        imageLeft={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Services",
        }}
        imageCenter={{
          src: gloves,
          text: "Move Out Cleaning",
          theLink: "/Services",
        }}
        imageRight={{
          src: vaccuum,
          text: "Move In Cleaning",
          theLink: "/Move-In-Cleaning",
        }}
      />

      <ImageBesideText
        imageSrc={commercialWash}
        floatDirection="right"
        altText="cleaners pressure washing warehouse"
        h1="Commercial Cleaning"
        text="Commercial cleaning is the practice of maintaining cleanliness in a variety of commercial spaces, such as offices, retail stores, schools, hospitals, and other public buildings. The goal of commercial cleaning is to create a healthy and safe environment for employees, customers, and visitors, while also enhancing the appearance of the space.

Commercial cleaning services typically include dusting, sweeping, mopping, vacuuming, sanitizing surfaces, and cleaning bathrooms and kitchens. Depending on the size and complexity of the space, commercial cleaning may also include specialized services such as carpet cleaning, window washing, and floor maintenance.

Hiring a professional commercial cleaning company has many benefits. First and foremost, it ensures that the space is cleaned thoroughly and to a high standard, which can improve the overall health and well-being of employees and visitors. It also saves time and resources for businesses, as they don't have to allocate internal staff to perform cleaning tasks.

Professional commercial cleaning companies use specialized equipment and cleaning products that are designed to effectively clean a variety of surfaces and materials. They also have the expertise and experience to handle complex cleaning challenges, such as removing tough stains and odors, and ensuring that the space is compliant with industry standards and regulations.

In conclusion, commercial cleaning is an essential service for maintaining a healthy and safe environment in commercial spaces. Hiring a professional commercial cleaning company can ensure that the space is cleaned thoroughly and to a high standard, saving time and resources for businesses and providing peace of mind for employees and visitors."
      />
      <br></br>
      <ImageBesideText
        imageSrc={vaccuum}
        floatDirection="left"
        altText="vacuum"
        h1="Move In Cleaning"
        text="Move-in cleaning is a type of cleaning service that is typically performed when someone is moving into a new home or apartment. The purpose of move-in cleaning is to ensure that the space is thoroughly cleaned and disinfected before the new occupants move in.

Move-in cleaning typically includes a deep cleaning of all areas of the home, including bathrooms, kitchens, bedrooms, and living spaces. The cleaning process may involve scrubbing, dusting, vacuuming, and mopping, as well as disinfecting surfaces to remove any germs or bacteria.

Hiring a professional cleaning company for move-in cleaning can provide many benefits. It can save time and effort for the new occupants, allowing them to focus on other aspects of moving in. Additionally, a professional cleaning company has the equipment and expertise to effectively clean and disinfect the space, ensuring that it is safe and healthy for the new occupants.

Overall, move-in cleaning is an important step in the process of moving into a new home or apartment. Hiring a professional cleaning company can help ensure that the space is thoroughly cleaned and disinfected, providing peace of mind for the new occupants."
      />
    </div>
  );
}

export default AboutUs;
