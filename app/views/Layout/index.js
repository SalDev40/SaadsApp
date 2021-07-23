import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    maxHeight: "100%",
    // border: "5px solid red",
    width: "88%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: ".4em",
    },
    "&::-webkit-scrollbar-track": {
      GridShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitGridShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  sideBar: {
    backgroundColor: theme.palette.background.paper,
    // border: "5px solid green",

    width: "12%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: ".4em",
    },
    "&::-webkit-scrollbar-track": {
      GridShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitGridShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.dark,
    },

    height: "100%",
  },
}));

function DashboardLayout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sideBar}>
        <NavBar />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default DashboardLayout;
