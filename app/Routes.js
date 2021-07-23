import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./views/Layout";
import SettingsView from "./views/Settings";
import HomeView from "./views/Home";
import DefaultForm from "./views/Forms/ProfileDefForm";

import { useSelector } from "react-redux";

export default function Routes() {

  return (
    <Switch>
      <Layout>
        <Route exact path="/app/home" component={HomeView} />
        <Route exact path="/app/settings" component={SettingsView} />
        <Route exact path="/app/form" component={DefaultForm} />
      </Layout>
    </Switch>
  );
}
