import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <div className="user-chat-info">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
          />
          <div className="user-chat-info-text">
            <span>Jane Doe</span>
            <p>Hello! How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
