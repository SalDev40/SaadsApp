import _ from "lodash";
import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { create } from "jss";
import rtl from "jss-rtl";
import MomentUtils from "@date-io/moment";
import { SnackbarProvider } from "notistack";
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { hot } from "react-hot-loader/root";

import { themeConfigs, baseConfig } from "./theme";
import { useSelector } from "react-redux";
import Routes from "./Routes";

const history = createBrowserHistory();
const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

function Root() {
  useStyles();

  const reduxSettings = useSelector((state) => state.settings);

  let themeConfig = themeConfigs.find(
    (theme) => theme.name === reduxSettings.theme
  );
  console.log(themeConfig);
  if (!themeConfig) {
    console.warn(new Error(`The theme ${reduxSettings.theme} is not valid`));
    [themeConfig] = themeConfigs;
  }

  let theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default hot(Root);
