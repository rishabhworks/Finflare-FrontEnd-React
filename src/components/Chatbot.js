import React, { useState } from 'react';
import axios from 'axios';
import '../styles/chatbot.css'; // CSS from styles folder

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Toggle visibility

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Ignore empty inputs

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post('https://finflare-backend-nodejs.onrender.com', { message: input });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { text: 'Oops, something went wrong—try again!', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Fancy Toggle Button */}
      <button
        className="fancy-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✨ Hide Chat' : '💰 Open Chat!'}
      </button>

      {/* Ultra Fancy Chatbot Container */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">💸 FinFlare Chatbot</div>
          <div className="chat-window">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chatbot-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything!"
              className="fancy-input"
            />
            <button type="submit" className="fancy-send-btn">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
