import * as actions from "../../actions/IpcAction/IpcAction";

const initialState = {
  handle: null,
};

export function IpcReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_IPC_HANDLE:
      return {
        ...state,
        handle: action.handle,
      };
    default:
      return state;
  }
}
