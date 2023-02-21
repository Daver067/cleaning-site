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
        <h1 className="header centered">About Us</h1>
      </div>
      <p className="mainP">
        Ut tempor mattis nisi, vitae pretium ipsum ultricies sed. Donec commodo
        lobortis velit. Phasellus aliquet placerat augue quis placerat. Sed
        ullamcorper venenatis neque, sit amet eleifend velit rhoncus sit amet.
        Pellentesque ex libero, eleifend sit amet tempor nec, cursus vel nulla.
        Sed ac felis vitae est semper faucibus nec ac est. Nullam laoreet
        venenatis velit, at efficitur nisl maximus id. Mauris a ornare neque.
        Cras elementum facilisis feugiat. Cras laoreet neque quam, vel gravida
        diam fringilla non. Fusce cursus, nulla vitae luctus ornare, urna magna
        semper sapien, eu vehicula erat mi id nisi. Nunc pulvinar leo quis erat
        sollicitudin tristique.
        <br />
        <br />
        Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas a tortor ex. Morbi mattis
        vulputate dolor, et tincidunt mauris.
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
          text: "Commercial Cleaning",
          theLink: "/Services",
        }}
      />

      <ImageBesideText
        imageSrc={commercialWash}
        floatDirection="right"
        altText="cleaners pressure washing warehouse"
        h1="Headline"
        text="Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas a tortor ex. Morbi mattis
        vulputate dolor, et tincidunt mauris.Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas a tortor ex. Morbi mattis
        vulputate dolor, et tincidunt mauris.Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus."
      />
      <br></br>
      <ImageBesideText
        imageSrc={commercialWash}
        floatDirection="left"
        altText="cleaners pressure washing warehouse"
        h1="Headline"
        text="Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas a tortor ex. Morbi mattis
        vulputate dolor, et tincidunt mauris.Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Maecenas a tortor ex. Morbi mattis
        vulputate dolor, et tincidunt mauris.Aenean in justo ultrices, interdum libero ac, feugiat neque. Nam
        scelerisque mollis neque, eget hendrerit lorem porttitor condimentum.
        Nulla finibus enim vel magna tincidunt, in pretium nisl egestas. Sed
        pellentesque erat eget malesuada ultricies. Nunc vitae risus
        sollicitudin, consectetur quam nec, sodales risus. In hac habitasse
        platea dictumst. Sed malesuada elementum arcu, varius luctus odio
        fringilla et. Pellentesque et rhoncus diam. Interdum et malesuada fames
        ac ante ipsum primis in faucibus."
      />
    </div>
  );
}

export default AboutUs;
