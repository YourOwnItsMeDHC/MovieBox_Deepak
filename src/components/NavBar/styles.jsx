import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",

    //   If device is lower/down than small screen devices, then we need to show these menu button
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
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
}));
