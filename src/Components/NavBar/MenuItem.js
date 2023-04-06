import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const { theLink, info } = props;
  let linkClasses = "link";
  let divClasses = "menuItem";

  if (props.additionalClassNames) {
    function joinClassNames(extraClasses) {
      return ` ${extraClasses}`;
    }
    divClasses += props.additionalClassNames.map(joinClassNames);
  }

  // all of this is just to have the hover fade back out when mouse exits
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseExit = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 800);
  };
  const style = {
    visibility: isHovered ? "visible" : "hidden",
  };
  //

  if (theLink === "noLink") {
    return (
      <div
        className={divClasses + " " + theLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        <div>
          {info} <span id="carat">{String.fromCharCode(9660)}</span>
        </div>
        <div style={style}>{props.additionalMenuItems}</div>
      </div>
    );
  }

  return (
    <div className={divClasses}>
      <Link to={theLink} className={linkClasses}>
        {info}
      </Link>
      {props.additionalMenuItems}
    </div>
  );
}

export default MenuItem;
