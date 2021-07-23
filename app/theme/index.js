/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import typography from "./typography";
import { softShadows, strongShadows } from "./shadows";
import { THEMES } from "../constants/themes";
export const baseConfig = {
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

export const themeConfigs = [
  {
    name: THEMES.PURPLE,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#2a2d3d",
        dark: "#222431",
        paper: "#2a2d3d",
      },
      primary: {
        main: "#8a85ff",
      },
      secondary: {
        main: "#8a85ff",
      },
      text: {
        primary: "#DCDCDC",
        secondary: "#9699a4",
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.PINK,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#2a2d3d",
        dark: "#222431",
        paper: "#2a2d3d",
      },
      primary: {
        main: "#FF69B4",
      },
      secondary: {
        main: "#FF69B4",
      },
      text: {
        primary: "#DCDCDC",
        secondary: "#9699a4",
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.GREEN,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#2a2d3d",
        dark: "#222431", //will change background color of pages
        paper: "#2a2d3d", //will change sidebar and the cards in components
      },
      primary: {
        main: "#3CB371",
      },
      secondary: {
        main: "#3CB371", //will change most buttons colors
      },
      text: {
        primary: "#DCDCDC",
        secondary: "#9699a4",
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.ORANGE,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#2a2d3d",
        dark: "#222431", //will change background color of pages
        paper: "#2a2d3d", //will change sidebar and the cards in components
      },
      primary: {
        main: "#FF8C00",
      },
      secondary: {
        main: "#FF8C00", //will change most buttons colors
      },
      text: {
        primary: "#DCDCDC",
        secondary: "#9699a4",
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.GOLD,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#2a2d3d",
        dark: "#222431", //will change background color of pages
        paper: "#2a2d3d", //will change sidebar and the cards in components
      },
      primary: {
        main: "#FFD700",
      },
      secondary: {
        main: "#FFD700", //will change most buttons colors
      },
      text: {
        primary: "#DCDCDC",
        secondary: "#9699a4",
      },
    },
    shadows: strongShadows,
  },
];
