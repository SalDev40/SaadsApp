import React from "react";
import { render } from "react-dom";
import Root from "./Root";
import { configureStore, history } from "./redux/store/configureStore.js";
import { enableES5 } from "immer";
import { Provider } from "react-redux";
const { exec, spawn, spawnSync } = require("child_process");
import axios from "axios";
enableES5();
import { saveIpcHandle } from "./redux/actions/IpcAction/IpcAction";


const store = configureStore();

//handle holds access to talk to child process

let child = spawn("/home/salmanhoosein/Desktop/electron-react-template/consoleApp/bin/Debug/net5.0/consoleApp");
child.stdin.setDefaultEncoding("utf8");
child.stdout.setEncoding("utf8");
child.stderr.setEncoding("utf8");
console.log(child);

setTimeout(() => {
  child.stdin.write(
    "hello from electron react"
  )
}, 500);

//update the IPC handle in redux
store.dispatch(saveIpcHandle(child));

document.addEventListener("DOMContentLoaded", () =>
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById("root")
  )
);

child.on("close", () => {
  console.log("child process closed");
});

child.stdout.on("data", async (data) => {
  console.log(data);
});

child.stderr.on("data", (raw) => {
  console.log("STDERR: receiving from rust");
  console.log(raw);
});

