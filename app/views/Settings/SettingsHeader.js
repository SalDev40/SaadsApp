// @eck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  SvgIcon,
  Typography,
  FormControlLabel,
  Switch,
  makeStyles,
} from "@material-ui/core";

import { ArrowRight } from "react-feather";

const useStyles = makeStyles((theme) => ({}));

function SettingsHeader(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Grid container item xs={12} alignItems="center">
      <Grid item container justify="flex-start" xs={3}>
        <Typography variant="h3" color="secondary">
        SETTINGS
          {/* 
          ADD TABS TO CUSTOMIZE STYLES EX:

          LAYOUTS | VIEWS | THEMES | DOCS */}
        </Typography>
      </Grid>
      {/* <Grid item container justify="flex-start" xs={9}>
        <FormControlLabel
          control={
            <Switch
              // checked={reduxAccounts.accountViewStyle}
              onChange={() => {
                // dispatch(viewStyleAccounts(!reduxAccounts.accountViewStyle));
              }}
            />
          }
          label={
            <Typography variant="overline" color="secondary">
              SWITCH STYLE
            </Typography>
          }
        />
      </Grid> */}
    </Grid>
  );
}

export default SettingsHeader;
