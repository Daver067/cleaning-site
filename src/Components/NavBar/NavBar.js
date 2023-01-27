import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

function NavBar() {
  return (
    <div id="NavBar">
      <MenuItem theLink="/" info="Home" />
      <MenuItem
        theLink="noLink"
        info="Services"
        additionalClassNames={["dropdown"]}
        additionalMenuItems={[
          <div className="dropdown-content">
            <MenuItem theLink="/Services" info="Service1" />
            <MenuItem theLink="/Services" info="Move Out Cleaning" />
            <MenuItem theLink="/Services" info="Other Stuff" />
            <MenuItem theLink="/Services" info="Move in Cleaning" />
          </div>,
        ]}
      />
      <MenuItem theLink="/AboutUs" info="About Us" />
      <MenuItem theLink="/Contact" info="Contact" />
    </div>
  );
}

export default NavBar;
