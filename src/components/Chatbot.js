import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null); // Ref for auto-scroll

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post('https://finflare-backend-nodejs.onrender.com/chatbot', { message: input });

      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { text: 'Oops, something went wrong—try again!', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  // Auto-scroll to bottom when new message is added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-wrapper">
      <button className="fancy-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✨ Hide Chat' : '💰 Open Chat!'}
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">💸 FinFlare Chatbot</div>
          <div className="chatbot-window" ref={chatWindowRef}>
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
