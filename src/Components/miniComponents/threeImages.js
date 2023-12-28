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
