import React from "react";
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
            <MenuItem theLink="/Services" info="Residential Cleaning" />
            <MenuItem theLink="/Services" info="Move Out Cleaning" />
            <MenuItem theLink="/Services" info="Commercial Cleaning" />
            <MenuItem theLink="/Services" info="Move In Cleaning" />
          </div>,
        ]}
      />
      <MenuItem theLink="/AboutUs" info="About Us" />
      <MenuItem theLink="/Contact" info="Contact" />
    </div>
  );
}

export default NavBar;
