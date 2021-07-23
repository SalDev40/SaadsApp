import * as actions from "../../actions/SettingsAction/SettingsActions";

const initialState = {
  discordSettings: {},
  licenseDeactivated: false,
  theme: "PURPLE",
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_DISCORD_SETTINGS:
      return {
        ...state,
        discordSettings: action.data,
      };
    case actions.UPDATE_LICENSE_SETTINGS:
      return {
        ...state,
        licenseDeactivated: action.data,
      };
    case actions.UPDATE_THEME_SETTINGS:
      return {
        ...state,
        theme: action.data,
      };
    default:
      return state;
  }
}
