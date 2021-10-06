import React from "react";
import path from "path";
import { render } from "react-dom";
import Root from "./Root";
import { enableES5 } from "immer";
import { Provider } from "react-redux";
import axios from "axios";
import TicketForm from "./TicketForm";

document.addEventListener("DOMContentLoaded", () =>
  render(
    <TicketForm />,
    document.getElementById("root")
  )
);
