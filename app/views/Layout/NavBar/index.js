/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useLocation, matchPath } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { remote } from "electron";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  useTheme,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ReceiptIcon from "@material-ui/icons/ReceiptOutlined";
import {
  ShoppingCart as ShoppingCartIcon,
  PieChart as PieChartIcon,
  UserPlus as AccountsIcon,
  Users as ProfilesIcon,
  BarChart as ProxiesIcon,
  Settings as SettingsIcon,
  Check as CaptchasIcon,
} from "react-feather";
import NavItem from "./NavItem";

const navConfig = [
  {
    title: "About",
    icon: ProfilesIcon,
    href: "/app/home",
  },
  {
    title: "Form",
    icon: Users,
    href: "/app/form",
  },
  {
    title: "Settings",
    href: "/app/settings",
    icon: SettingsIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "85%",
    height: "85%",
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="User"
              className={classes.avatar}
            />
          </Box>
        </Box>
        <Divider />
        <Box pt={2}>
          <List>
            {navConfig.map((config) => {
              return (
                <NavItem
                  href={config.href}
                  icon={config.icon}
                  key={config.href}
                  title={config.title}
                />
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
  return content;
}

export default NavBar;
