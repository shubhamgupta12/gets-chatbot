import React from "react";
import { connect } from "react-redux";
import "./modal.css";

import { setIframeLoading, setIframeUrl } from "../../actions/iframeUrl";

const IframeModal = ({
  href,
  iframeLoading,
  setIframeLoading,
  setIframeUrl
}) => {
  return (
    <div className="wrapper">
      <div className="iframe">
        {iframeLoading && <span className="iframe-loading">Loading...</span>}
        <iframe
          onLoad={() => setIframeLoading(false)}
          style={{ width: "100%", height: "100%" }}
          target="_parent"
          src={href}
          title="Gets Marketplace"
        />
      </div>

      <button className="close-iframe" onClick={() => setIframeUrl("")}>
        &times;
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    iframeLoading: state.iframe.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setIframeUrl: url => dispatch(setIframeUrl(url)),
    setIframeLoading: bool => dispatch(setIframeLoading(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IframeModal);
