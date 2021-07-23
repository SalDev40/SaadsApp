import axios from "axios";
export const SAVE_IPC_HANDLE = "SAVE_IPC_HANDLE";

export function saveIpcHandle(handle) {
  // console.log(handle)
  return {
    type: SAVE_IPC_HANDLE,
    handle: handle,
  };
}
