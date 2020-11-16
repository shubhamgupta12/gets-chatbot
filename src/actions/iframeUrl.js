import { SET_IFRAME_URL } from "./types";
import { SET_IFRAME_LOADING } from "./types";

export const setIframeUrl = iframeUrl => {
  return { type: SET_IFRAME_URL, payload: iframeUrl };
};

export const setIframeLoading = loading => {
  return { type: SET_IFRAME_LOADING, payload: loading };
};
