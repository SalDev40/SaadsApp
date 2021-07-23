//
import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import Form from "./ProfileDefForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    maxHeight: "100%",
  },
}));

function FormsView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Forms">
      <Container maxWidth={false}>
        <Box pt={1.2} />
        <Form />
      </Container>
    </Page>
  );
}

export default FormsView;
