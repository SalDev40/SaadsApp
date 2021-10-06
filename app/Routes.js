import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import TicketForm from "./TicketForm";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={TicketForm} />
    </Switch>
  );
}

export default Routes;
