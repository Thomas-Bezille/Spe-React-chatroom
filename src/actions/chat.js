export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// -------------------------------------------------- //

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});

export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  value: newValue,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessFulLogin = (nickname) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  nickname,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
