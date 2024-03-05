import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Cari Kontak" />
      </div>

      <div className="user-chat">
        <div className="user-chat-info">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="user-chat-info-text">
            <span>Harold Christ</span>
            <p>Hello! How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
