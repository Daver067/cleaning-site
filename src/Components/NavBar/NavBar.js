import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import "./NavBar.scss";

function NavBar() {
  return (
    <div id="NavBar">
      <MenuItem theLink="/Home" info="Home" />
      <MenuItem
        theLink="/Services"
        info="Services"
        additionalClassNames={["dropdown"]}
        additionalMenuItems={[
          <div className="dropdown-content">
            <MenuItem theLink="/Services" info="Service1" />
            <MenuItem theLink="/Services" info="Service2" />
            <MenuItem theLink="/Services" info="Service3" />
          </div>,
        ]}
      />
      <MenuItem theLink="/AboutUs" info="About Us" />
      <MenuItem theLink="/Contact" info="Contact" />
    </div>
  );
}

export default NavBar;
