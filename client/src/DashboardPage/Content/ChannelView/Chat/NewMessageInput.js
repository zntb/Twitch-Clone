import React, { useState } from 'react';

export const NewMessageInput = ({ sendMessage }) => {
  const [messageContent, setMessageContent] = useState('');

  const handleValuechange = (event) => {
    setMessageContent(event.target.value);
  };

  const handleSendMessage = () => {
    // send message tothe server
    if (messageContent.length > 0) {
      sendMessage(messageContent);
      // after sending message, reset input value
      setMessageContent('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  // console.log(messageContent);

  return (
    <div className="chat-message-input-container">
      <input
        className="chat-message-input"
        placeholder="Type message ..."
        value={messageContent}
        onChange={handleValuechange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
