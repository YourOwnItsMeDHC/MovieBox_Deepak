import React from "react";

// For NavBar
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

//Icons for navbar
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

//For switching between the pages
import { Link } from "react-router-dom";

import useStyle from "./styles";

//For toggle button - for light and dark theme
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const classes = useStyle();

  //For making it compatible with mobile devices as well
  const isMobile = useMediaQuery("(max-width:600px)");

  //For toggle button - for light and dark theme
  const theme = useTheme();

  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* If device is a mobile, then do below things */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          {/* Inside sx we can provide some king of Material UI styles */}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* If device is a big screen device i.e excluding mobile, then do below things */}
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png`}
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
