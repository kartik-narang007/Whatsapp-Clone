export const HOST = "http://localhost:3005";

const AUTH_ROUTE = `${HOST}/api/auth`;

const MESSAGES_ROUTE = `${HOST}/api/messages`;

export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/checkUser`;

export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onBoardUser`;

export const GET_ALL_CONTACTS = `${AUTH_ROUTE}/get-contacts`;

export const ADD_MESSAGE_ROUTE = `${MESSAGES_ROUTE}/addMessage`;

export const GET_MESSAGES_ROUTE = `${MESSAGES_ROUTE}/get-messages`;

export const ADD_IMAGE_MESSAGE = `${MESSAGES_ROUTE}/add-image-message`

export const ADD_AUDIO_MESSAGE = `${MESSAGES_ROUTE}/add-audio-message`


export const GET_INITIAL_CONTACTS_ROUTE = `${MESSAGES_ROUTE}/get-initial-contacts`