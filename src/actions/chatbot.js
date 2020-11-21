import axios from "axios";

// Import types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  BOT_MESSAGE_LOADING
} from "./types";

//  Function that handles  users message
export const userMessage = message => async dispatch => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (err) {
    dispatch({ type: INPUT_FAIL });
  }
};

//  Sends the message to the bot - API CALL
export const botMessage = message => async dispatch => {
  dispatch({ type: BOT_MESSAGE_LOADING });
  const URL =
    "https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat";
  try {
    const body = { text: message };
    const res = await axios.post(`${URL}`, body, {
      headers: { "Content-Type": "application/json" }
    });
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.error("ERROR:", err);
    dispatch({ type: MESSAGE_FAIL });
  }
};
