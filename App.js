import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: Date.now(),
      username: randomUser,
      message: message
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          username={message.username}
          message={message.message}
        />
      ))}
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default App;
