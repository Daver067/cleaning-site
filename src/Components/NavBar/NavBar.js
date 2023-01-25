import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

function NavBar() {
  return (
    <div id="NavBar">
      <MenuItem theLink="/cleaning-site/Home" info="Home" />
      <MenuItem
        theLink="noLink"
        info="Services"
        additionalClassNames={["dropdown"]}
        additionalMenuItems={[
          <div className="dropdown-content">
            <MenuItem theLink="/cleaning-site/Services" info="Service1" />
            <MenuItem
              theLink="/cleaning-site/Services"
              info="Move Out Cleaning"
            />
            <MenuItem theLink="/cleaning-site/Services" info="Other Stuff" />
            <MenuItem
              theLink="/cleaning-site/Services"
              info="Move in Cleaning"
            />
          </div>,
        ]}
      />
      <MenuItem theLink="/cleaning-site/AboutUs" info="About Us" />
      <MenuItem theLink="/cleaning-site/Contact" info="Contact" />
    </div>
  );
}

export default NavBar;
