import React from "react";
import Slider from "../slider/Slider";

const Messages = ({ chat, handleBotButton }) => {
  return (
    <>
      {!chat || !chat.length
        ? ""
        : chat.map((msg, index) => (
            <div className="chat-wrapper" key={`chat_${index}`}>
              <div className={`chat-bubble-${msg.type}`}>
                {msg.response.message}
              </div>
              <div className="btn-wrapper">
              {msg.response.responseCard &&
                msg.response.responseCard.genericAttachments &&
                msg.response.responseCard.genericAttachments[0].buttons &&
                msg.response.responseCard.genericAttachments[0].buttons.map(
                  (button, index) => (
                    <button
                      key={`${button.value}_${index}`}
                      className="chat-btn"
                      onClick={() => handleBotButton(button)}
                    >
                      {button.text}
                    </button>
                  )
                )}
    
              </div>
              {msg.response.responseCard &&
                msg.response.responseCard.genericAttachments &&
                !msg.response.responseCard.genericAttachments[0].buttons && (
                  <Slider data={msg.response.responseCard.genericAttachments} />
                )}
            </div>
          ))}
    </>
  );
};

export default Messages;
