import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  TextField,
  Box,
  Grid,
  Button,
  makeStyles,
  FormControlLabel,
  Typography,
  Switch,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {},
  backGround: {
    backgroundColor: theme.palette.background.paper,
    padding: 10,
  },
}));

function DefaultForm() {

  const classes = useStyles();
  const ipcRedux = useSelector((state) => state.ipc);


  const [resourceGroup, setResourceGroup] = React.useState();
  const [subscriptionName, setSubscriptionName] = React.useState();


  return (
    <Grid container item spacing={1}>
      <Grid item xs={6}>
        <TextField
          label="resourceGroup"
          fullWidth
          onChange={(event) => {
            setResourceGroup(event.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={resourceGroup}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="subscriptionName"
          fullWidth
          onChange={(event) => {
            setSubscriptionName(event.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={subscriptionName}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            ipcRedux.handle.stdin.write(
              `${resourceGroup} - ${subscriptionName}`
            );
          }}
        >
          Send to C#
        </Button>
      </Grid>
    </Grid>

  )
}

export default DefaultForm;
