import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Divider,
  Grid,
  Switch,
  Checkbox,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import { updateLicense } from "../../redux/actions/SettingsAction/SettingsActions";
import { update } from "lodash";
const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundColor: theme.palette.background.paper,
    padding: 12,
  },
}));

function SettingsLicense() {
  const classes = useStyles();
  const [deactivate, setDeactivate] = React.useState(false);
  const dispatch = useDispatch();
  const reduxSettings = useSelector((state) => state.settings);
  React.useEffect(() => {
    setDeactivate(reduxSettings.licenseDeactivated);
  }, []);
  return (
    <Grid
      container
      spacing={2}
      className={classes.backGround}
      justify="center"
      item
      xs={12}
    >
      <Grid container item xs={12} justify="center">
        <Typography variant="h3" color="textPrimary">
          LICENSE
        </Typography>
      </Grid>
      {/* <Grid container item xs={12} alignItems="center">
        <Grid item container justify="flex-end" xs={6}>
          <Typography variant="h3" color="textPrimary">
            License
          </Typography>
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            onClick={() => {
              dispatch(updateLicense(deactivate))
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid container alignItems="center" item xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color="textPrimary">
            Deactivate
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Unbind this device, can activate on another device
          </Typography>
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <Checkbox
            checked={deactivate}
            onChange={() => {
              setDeactivate(!deactivate);
              dispatch(updateLicense(!deactivate))

            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SettingsLicense;
