import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import "./App.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm SIMHA. How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot response (Replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Processing...", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <motion.h1
        className="chat-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SIMHA - AI Chatbot
      </motion.h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`chat-message ${msg.sender}`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="send-button">
          <Send className="send-icon" />
        </button>
      </div>
    </div>
  );
}
