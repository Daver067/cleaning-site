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

  if (theLink === "noLink") {
    return (
      <div className={divClasses + " " + theLink}>
        <div>{info}</div>
        {props.additionalMenuItems}
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
