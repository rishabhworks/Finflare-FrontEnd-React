import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const userMessage = input;
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/chatbot', { message: userMessage });
      const botMessage = response.data.reply;
      setMessages([...messages, { text: userMessage, sender: 'user' }, { text: botMessage, sender: 'bot' }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot-container" style={{ position: 'fixed', bottom: '10px', right: '10px', width: '300px', height: '400px', border: '1px solid #ccc', backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', borderRadius: '8px' }}>
      <div className="chatbot-header" style={{ fontWeight: 'bold', textAlign: 'center' }}>Chatbot</div>
      <div className="chatbot-messages" style={{ height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <div style={{ backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#FFF', padding: '10px', borderRadius: '10px', maxWidth: '80%' }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          style={{ width: '80%', padding: '5px' }}
        />
        <button type="submit" style={{ width: '18%', backgroundColor: '#007bff', color: 'white', border: 'none', padding: '5px' }}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;

