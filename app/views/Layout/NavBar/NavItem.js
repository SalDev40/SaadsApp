import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { Button, ListItem, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.secondary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.secondary.main,
    },
  },
}));

function NavItem(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  let { icon: Icon } = props;
  return (
    <ListItem
      disableGutters
      key={props.title}
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf)}
        component={RouterLink}
        exact
        to={props.href}
        onClick={() => { }}
      >
        <Icon className={classes.icon} size="20" />
        <span>{props.title}</span>
      </Button>
    </ListItem>
  );
}

export default NavItem;
