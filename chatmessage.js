import React, { useState } from "react";

const ChatMessage = ({ message, username }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      <span>{username}: {message}</span>
      <button onClick={handleLike}>Like ({likeCount})</button>
    </div>
  );
};

export default ChatMessage;
