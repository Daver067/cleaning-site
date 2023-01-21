import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuItem({ theLink, info }) {
  return (
    <div className="menuItem">
      <Link to={theLink}>{info}</Link>
    </div>
  );
}

export default MenuItem;
