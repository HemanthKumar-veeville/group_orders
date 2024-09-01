import React, { useState, useEffect } from "react";

const Chat = ({ dealId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Logic to fetch messages related to the deal
    const fetchedMessages = [
      // Sample messages
      {
        id: 1,
        sender: "User1",
        content: "Is this deal still available?",
        timestamp: "2024-08-30T12:00:00Z",
      },
      {
        id: 2,
        sender: "User2",
        content: "Yes, it is still available.",
        timestamp: "2024-08-30T12:01:00Z",
      },
    ];
    setMessages(fetchedMessages);
  }, [dealId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Logic to send a new message (e.g., API call)
    const message = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">Chat</h3>
      <div className="mb-4">
        <div className="h-64 overflow-y-scroll p-2 border border-custom-light rounded-lg">
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <div className="text-custom-dark font-semibold">
                {message.sender}
              </div>
              <div className="text-custom-dark">{message.content}</div>
              <div className="text-custom-muted text-sm">
                {new Date(message.timestamp).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border border-custom-light rounded-lg shadow-sm"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
