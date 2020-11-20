//  Import dependencies
import React from "react";
import "./App.css";

// Import redux components
import { connect } from "react-redux";

// Import chat component
import Chat from "./components/chat/Chat";
import IframeModal from "./components/iframeModal/IframeModal";

// Connect application to redux
const App = ({ iframeUrl }) => {
  return (
    <div className="chatbot-wrapper">
      <Chat />
      {iframeUrl && <IframeModal href={iframeUrl} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    iframeUrl: state.iframe.iframeUrl
  };
};

export default connect(mapStateToProps)(App);
