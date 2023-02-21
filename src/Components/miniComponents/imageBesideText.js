import React from "react";

function ImageBesideText(props) {
  return (
    <div className={`imageBesideText`}>
      <img
        src={props.imageSrc}
        alt={props.altText}
        style={{ float: ` ${props.floatDirection} ` }}
      ></img>
      <div>
        <p>
          <span>{props.h1}</span>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default ImageBesideText;
