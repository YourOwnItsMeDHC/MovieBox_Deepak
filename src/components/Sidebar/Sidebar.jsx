import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from "@mui/material";

import { Link } from "react-router-dom";

import { useTheme } from "@mui/styles";

import useStyles from "./styles";

const redLogo =
  "https://fontmeme.com/permalink/230319/0c8a30fcf68ff89c3c114f787669a90f.png";
const blueLogo =
  "https://fontmeme.com/permalink/230319/10edc436c99168c677702e00f8196ba9.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          //   src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="MovieBox_Deepak - Logo"
        ></img>
      </Link>

      <Divider>
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItemButton onClick={() => {}}>
                {/* <ListItemIcon>
                  <img
                    src={redLogo}
                    className={classes.genreImages}
                    height={30}
                  ></img>
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Divider>

      <Divider>
        <List>
          <ListSubheader>Genres</ListSubheader>
          {demoCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItemButton onClick={() => {}}>
                {/* <ListItemIcon>
                  <img
                    src={redLogo}
                    className={classes.genreImages}
                    height={30}
                  ></img>
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Divider>
    </>
  );
};

export default Sidebar;
