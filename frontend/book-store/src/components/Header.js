import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            on
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/Books" label=" Books" />
            <Tab LinkComponent={NavLink} to="/about" label="Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
