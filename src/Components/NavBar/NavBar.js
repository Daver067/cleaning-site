import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import "./NavBar.scss";

function NavBar() {
  return (
    <div id="NavBar">
      <MenuItem theLink="/" info="first link" />
      <MenuItem theLink="/" info="second link" />
      <MenuItem theLink="/" info="third link" />
    </div>
  );
}

export default NavBar;
