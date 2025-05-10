// src/components/GeminiChat.tsx
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `
You are a helpful assistant for a license-selling platform. When users ask about selling their software license, guide them through these steps:

1. **Upload License** – Tell them they can securely upload their license information through our portal. Mention support for all major software vendors.
2. **Get Valuation** – Explain that experts verify and provide a competitive market valuation within 24 hours.
3. **Get Paid** – Let them know they’ll receive payment quickly with multiple payment options.

Respond clearly, in a friendly and concise way. Encourage users to get started and ask questions if they need help.
`;

const API_KEY = import.meta.env.VITE_APP_URL
const genAI = new GoogleGenerativeAI(API_KEY);

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent([
        SYSTEM_PROMPT,
        input]);
      const response = result.response.text();
      setMessages([...newMessages, { role: 'bot', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'bot', text: 'Something went wrong!' }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    setMessages([{ role: 'bot', text: 'Hi there! 👋 How can I help you with selling your software license today?' }]);
  }, []);

  return (
    <div className="fixed top-0 left-auto flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 w-auto h-auto z-[1000000] ">
      <div className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-xl flex flex-col h-[80vh]">
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 self-end text-right'
                  : 'bg-gray-700 self-start text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-gray-400 text-sm">Bot is typing...</div>
          )}
        </div>
        <div className="p-4 border-t border-gray-700 flex items-center">
          <input
            type="text"
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
