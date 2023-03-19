import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",

    //   If device is lower/down than small screen devices, then we need to show these menu button
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),

    //   If device is higher/up than small screen devices, then there is no need to show these menu button
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawer: {
    //   If device is higher/up than small screen devices, then there is no need to show these menu button
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerBackground: {},

  drawerPaper: {
    width: drawerWidth,
  },

  linkButton: {
    // It should work only when we hover over it
    "&: hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
