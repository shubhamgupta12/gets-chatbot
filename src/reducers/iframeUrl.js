import { SET_IFRAME_URL, SET_IFRAME_LOADING } from "../actions/types";

// Initial state
const initialState = {
  iframeUrl: "",
  loading: true
};

// Switch statement - update state
export const iframe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IFRAME_URL:
      return {
        ...state,
        iframeUrl: payload
      };
    case SET_IFRAME_LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return {
        ...state
      };
  }
};
