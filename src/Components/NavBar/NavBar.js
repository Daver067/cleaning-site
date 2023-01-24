import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import "./NavBar.scss";

function NavBar() {
  return (
    <div id="NavBar">
      <MenuItem theLink="/cleaning-site/Home" info="Home" />
      <MenuItem
        theLink="/cleaning-site/Services"
        info="Services"
        additionalClassNames={["dropdown"]}
        additionalMenuItems={[
          <div className="dropdown-content">
            <MenuItem theLink="/cleaning-site/Services" info="Service1" />
            <MenuItem theLink="/cleaning-site/Services" info="Service2" />
            <MenuItem theLink="/cleaning-site/Services" info="Service3" />
          </div>,
        ]}
      />
      <MenuItem theLink="/cleaning-site/AboutUs" info="About Us" />
      <MenuItem theLink="/cleaning-site/Contact" info="Contact" />
    </div>
  );
}

export default NavBar;
