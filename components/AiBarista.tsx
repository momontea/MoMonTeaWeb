import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Coffee } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AiBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola Soñador! 👁️✨ Soy Momon. ¿Qué sueño quieres despertar hoy? ¿Algo dulce para el alma o fresco para la mente?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToGemini(userMsg.text, historyForApi);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-momon-green text-white px-5 py-4 rounded-full shadow-[4px_4px_0px_#231f20] transition-all hover:scale-105 hover:bg-momon-yellow hover:text-momon-black border-2 border-momon-black ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={24} />
        <span className="font-brand font-bold text-lg hidden md:inline">Momon AI</span>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-momon-black animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-momon-yellow p-4 flex justify-between items-center border-b-4 border-momon-black">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full border-2 border-momon-black text-momon-red">
                 <Sparkles size={22} />
              </div>
              <div>
                <h3 className="font-brand font-bold text-xl text-momon-black">Momon AI</h3>
                <p className="text-xs font-sans font-bold text-momon-black/70 uppercase tracking-wider">Catalizador de Sueños</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-momon-black text-white p-2 rounded-full hover:bg-momon-red transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-gray-50 space-y-4 font-sans bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-hard-sm border-2 ${
                  msg.role === 'user' 
                    ? 'bg-momon-black text-white border-momon-black rounded-br-none' 
                    : 'bg-white text-momon-black border-momon-black rounded-bl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border-2 border-momon-black rounded-bl-none flex items-center gap-2 shadow-hard-sm">
                  <div className="w-2 h-2 bg-momon-red rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-momon-yellow rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-momon-green rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t-4 border-momon-black">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Cuéntame tu antojo soñador..."
                className="w-full pl-5 pr-14 py-3 rounded-full border-2 border-momon-black focus:outline-none focus:bg-momon-offwhite transition-all font-sans font-medium placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-momon-red text-white rounded-full disabled:opacity-50 hover:bg-momon-black transition-colors border-2 border-momon-black hover:border-white shadow-sm"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};