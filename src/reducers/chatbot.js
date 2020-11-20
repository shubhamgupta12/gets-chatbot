import moment from "moment";
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL
} from "../actions/types";

// Initial state
const initialState = {
  messages: [
    {
      response: {
        message:
          "Hi, I am Gail! I'm here to help you."
      },
      time: moment().format("LT"),
      type: "bot"
    },
    {
      response: {
        message:
          "We are a community marketplace offering a wide variety of products and services from our trusted vendors and partners."
      },
      time: moment().format("LT"),
      type: "bot"
    }
  ]
};

// Switch statement - update state
export const chatbot = (state = initialState, action) => {
  const { type, payload } = action;
  let { messages } = state;
  switch (type) {
    case INPUT_SUCCESS:
      messages = [
        ...messages,
        { response: { message: payload }, time: moment().format("LT"), type: "user" }
      ];
      return {
        ...state,
        messages
      };
    case INPUT_FAIL:
      return {
        ...state
      };
    case MESSAGE_SUCCESS:
      messages = [...messages, { response: payload, time: moment().format("LT"), type: "bot" }];
      return {
        ...state,
        messages
      };
    case MESSAGE_FAIL:
      messages = [
        ...messages,
        {
          response: {
            message: "Something doesn't seem right. Please try again."
          },
          type: "bot"
        }
      ];
      return {
        ...state,
        messages
      };
    default:
      return {
        ...state
      };
  }
};
