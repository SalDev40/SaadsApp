import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
 
}));
function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      // alignItems="center"
      // justify="center"
      xs={12}
    >
      <Grid item style={{ marginTop: 250 }} xs={12}>
        <Typography
          variant="h1"
          style={{
            wordWrap: "break-word",
            textAlign: "center",
            fontSize: 30,
          }}
          color="textPrimary"
        >
          Welcome To Electron-React-Boilerplate
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
