import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  updateDiscord,
} from "../../redux/actions/SettingsAction/SettingsActions";

const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundColor: theme.palette.background.paper,
    padding: 12,
  },
}));

function SettingsDiscord() {
  const classes = useStyles();
  const [discNoti, setDiscNoti] = React.useState(false);
  const [webHook, setWebhook] = React.useState("");
  const dispatch = useDispatch();
  const reduxSettings = useSelector((state) => state.settings);

  React.useEffect(()=>{
    setDiscNoti(reduxSettings.discordSettings.notifications)
    setWebhook(reduxSettings.discordSettings.webhook)
  }, [])

  return (
    <Grid
      container
      spacing={2}
      className={classes.backGround}
      justify="center"
      item
      xs={12}
    >
      <Grid container item xs={12} alignItems="center">
        <Grid item container justify="flex-end" xs={6}>
          <Typography variant="h3" color="textPrimary">
            DISCORD
          </Typography>
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <Button
            color="secondary"
            type="submit"
            variant="outlined"
            onClick={() => {
              dispatch(
                updateDiscord({
                  webhook: webHook,
                  notifications: discNoti,
                })
              );
            }}
          >
            SAVE
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid container spacing={2} item xs={12}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Webhook"
            variant="outlined"
            value={webHook}
            onChange={(event) => {
              setWebhook(event.target.value);
            }}
          />
        </Grid>
        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color="textPrimary">
              Enable Notifications
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Receive notifications for each successful
              purchase at the webhook specified.
            </Typography>
          </Grid>
          <Grid item container justify="flex-end" xs={6}>
            <Switch
              checked={discNoti}
              edge="start"
              name="isPublic"
              onChange={() => {
                setDiscNoti(!discNoti);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SettingsDiscord;
