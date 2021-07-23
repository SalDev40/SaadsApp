//Action Types
export const UPDATE_THEME_SETTINGS = "UPDATE_THEME_SETTINGS";
export const UPDATE_DISCORD_SETTINGS = "UPDATE_DISCORD_SETTINGS";
export const UPDATE_LICENSE_SETTINGS = "UPDATE_LICENSE_SETTINGS";

export function updateDiscord(data) {
    console.log(data)
  return {
    type: UPDATE_DISCORD_SETTINGS,
    data: data,
  };
}

export function updateTheme(data) {
  return {
    type: UPDATE_THEME_SETTINGS,
    data: data,
  };
}

export function updateLicense(data) {
  return {
    type: UPDATE_LICENSE_SETTINGS,
    data: data,
  };
}

