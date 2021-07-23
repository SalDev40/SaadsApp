import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Tab,
  Grid,
  Tabs,
  makeStyles,
} from "@material-ui/core";
import Page from "../../components/Page";
import Header from "./SettingsHeader";
import SettingsDiscord from "./SettingsDiscord";
import SettingsLicense from "./SettingsLicense";
import SettingsThemes from "./SettingsThemes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
  },
}));

function SettingsView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="false">
        <Box pt={1.5} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={0.5} />
            <SettingsDiscord />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={0.5} />
            <SettingsLicense />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={0.5} />
            <SettingsThemes />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default SettingsView;
