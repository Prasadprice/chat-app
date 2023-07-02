import React, { useState } from "react";

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
