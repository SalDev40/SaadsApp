import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { settingsReducer } from "./SettingsReducer/SettingsReducer";
import { IpcReducer } from "./IpcReducer/IpcReducer";

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    settings: settingsReducer,
    ipc: IpcReducer,
  });
}
