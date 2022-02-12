import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid, Typography } from "@material-ui/core";

const NavBar = (props) => {
  const { value, handleChange } = props
  return (
    <AppBar position="static" color="#303030" style={{ position: "fixed", top: 0 }}>

      <Typography variant="h4" style={{
        whiteSpace: "pre-wrap"
      }}>
        Made with  <span style={{ color: "red" }}>love ♥</span>  by <span style={{ color: "greenyellow" }}>Yair levi!</span>
      </Typography>




      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
