import React from "react";
import { Link } from "react-router-dom";

function ThreeImages(props) {
  return (
    <div className="threeImage-container">
      <div className="image-container">
        <Link to={props.imageLeft.theLink}>
          <img src={props.imageLeft.src} alt={props.imageLeft.text}></img>
          <h3>{props.imageLeft.text}</h3>
        </Link>
      </div>
      <div className="image-container">
        <Link to={props.imageCenter.theLink}>
          <img src={props.imageCenter.src} alt={props.imageCenter.text}></img>
          <h3>{props.imageCenter.text}</h3>
        </Link>
      </div>
      <div className="image-container">
        <Link to={props.imageRight.theLink}>
          <img src={props.imageRight.src} alt={props.imageRight.text}></img>
          <h3>{props.imageRight.text}</h3>
        </Link>
      </div>
    </div>
  );
}

export default ThreeImages;
/*
import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";
import commercialWash from "../../images/commercialWash.jpg";

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
          src: commercialWash,
          text: "Commercial Cleaning",
          theLink: "/Commercial",
        }}
          imageRight={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Residential",
        }}
      />
*/
