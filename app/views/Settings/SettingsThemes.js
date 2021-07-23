import React, { useState } from "react";
import { capitalCase } from "change-case";
import {
  Box,
  Button,
  TextField,
  Card,
  useTheme,
  makeStyles,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { THEMES } from "../../constants/themes";
import { useDispatch } from "react-redux";

import { updateTheme } from "../../redux/actions/SettingsAction/SettingsActions";

const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundColor: theme.palette.background.paper,
    padding: 12,
  },
}));

function SettingsTheme() {
  const classes = useStyles();
  const [theme, setTheme] = useState();
  const themeName = useTheme();
  console.log(themeName);
  const dispatch = useDispatch();
  return (
    <Grid
      container
      spacing={2}
      className={classes.backGround}
      justify="center"
      item
      xs={12}
    >
      <Grid container item xs={12} alignItems="center" justify="center">
        <Typography variant="h3" color="textPrimary">
          THEMES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid container spacing={2} item xs={12}>
        {Object.keys(THEMES).map((theme) => (
          <Grid
            container
            item
            alignItems="center"
            xs={12}
            key={theme}
            value={theme}
          >
            <Grid item container item justify="flex-start" xs={6}>
              <Typography
                variant="body1"
                style={{ textTransform: "uppercase" }}
                style={{
                  color:
                    theme == "PINK"
                      ? "#FF69B4"
                      : theme == "ORANGE"
                      ? "#FF8C00"
                      : theme == "GOLD"
                      ? "#FFD700"
                      : theme == "GREEN"
                      ? "#3CB371"
                      : "#8a85ff",
                }}
              >
                {capitalCase(theme)}
              </Typography>
            </Grid>
            <Grid item container item justify="flex-end" xs={6}>
              <Button
                size="small"
                variant="outlined"
                style={{
                  color:
                    theme == "PINK"
                      ? "#FF69B4"
                      : theme == "ORANGE"
                      ? "#FF8C00"
                      : theme == "GOLD"
                      ? "#FFD700"
                      : theme == "GREEN"
                      ? "#3CB371"
                      : "#8a85ff",

                  borderColor:
                    theme == "PINK"
                      ? "#FF69B4"
                      : theme == "ORANGE"
                      ? "#FF8C00"
                      : theme == "GOLD"
                      ? "#FFD700"
                      : theme == "GREEN"
                      ? "#3CB371"
                      : "#8a85ff",
                }}
                onClick={() => {
                  setTheme(theme);
                  dispatch(updateTheme(theme));
                }}
              >
                SELECT
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default SettingsTheme;
