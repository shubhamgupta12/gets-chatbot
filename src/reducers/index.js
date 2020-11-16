// Import dependencies
import { combineReducers } from "redux";

// Import reducers
import { chatbot } from "./chatbot";
import { iframe } from "./iframeUrl";

// Export combined reducers
export default combineReducers({ chatbot, iframe });
