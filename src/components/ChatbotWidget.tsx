'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '@/lib/hooks/useChat';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful portfolio assistant for Sayid Muhammad Sayid, a Jakarta-based Data Analyst and Scientist. 
Answer questions about his background, skills, projects, and experience in a friendly, concise manner.

Key facts about Sayid:
- Data Analyst & Scientist based in Jakarta, Indonesia
- GPA: 3.68
- Skills: Python, SQL, Machine Learning, Data Visualization, Predictive Modeling, Statistical Analysis
- Tools: TensorFlow, Scikit-learn, Pandas, NumPy, Tableau, Power BI
- Projects:
  1. Churn Diagnostics — ML model for customer churn prediction
  2. ROI Segmentation — Customer segmentation for marketing ROI optimization
  3. Alumni Clustering — Clustering analysis for alumni engagement
  4. USD-IDR Prediction — Time series forecasting with 82.11% MSE reduction
- Open to data analyst, data scientist, and ML engineer roles
- Contact: available through the portfolio contact section

Keep answers brief and relevant to the portfolio. If asked something unrelated, politely redirect to portfolio topics.`;

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Sayid's portfolio assistant. Ask me anything about his skills, projects, or experience! 👋",
    },
  ]);
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { response, isLoading, error, sendMessage } = useChat(
    'GEMINI',
    'gemini/gemini-2.5-flash',
    true
  );

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  // Track streaming response
  useEffect(() => {
    if (isLoading && response) {
      setStreamingContent(response);
    }
    if (!isLoading && response && streamingContent) {
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setStreamingContent('');
    }
  }, [response, isLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    sendMessage(apiMessages, { temperature: 0.7, max_tokens: 512 });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[520px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(13, 21, 38, 0.97)',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(34, 211, 238, 0.12)' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #22D3EE, #0891B2)' }}
                >
                  S
                </div>
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2"
                  style={{ borderColor: '#0D1526' }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#E2E8F0' }}>
                  Portfolio Assistant
                </p>
                <p className="text-xs" style={{ color: '#22D3EE' }}>
                  Powered by Gemini
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: '#94A3B8' }}
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed"
                  style={
                    msg.role === 'user'
                      ? {
                          background:
                            'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(8,145,178,0.2))',
                          border: '1px solid rgba(34,211,238,0.25)',
                          color: '#E2E8F0',
                        }
                      : {
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          color: '#CBD5E1',
                        }
                  }
                >
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1.5 [&>p:last-child]:mb-0 [&>ul]:mt-1 [&>ul]:mb-1 [&>li]:mb-0.5">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {/* Streaming bubble */}
            {isLoading && streamingContent && (
              <div className="flex justify-start">
                <div
                  className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#CBD5E1',
                  }}
                >
                  <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1.5 [&>p:last-child]:mb-0">
                    <ReactMarkdown>{streamingContent}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && !streamingContent && (
              <div className="flex justify-start">
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{
                          background: '#22D3EE',
                          animationDelay: `${i * 0.15}s`,
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ borderTop: '1px solid rgba(34, 211, 238, 0.12)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Sayid's portfolio…"
              disabled={isLoading}
              className="flex-1 text-sm rounded-xl px-3.5 py-2.5 outline-none transition-all placeholder:text-slate-500 disabled:opacity-50"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#E2E8F0',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.35)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #22D3EE, #0891B2)' }}
              aria-label="Send message"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M13.5 7.5L1.5 1.5l3 6-3 6 12-6z" fill="white" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* FAB Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          background: isOpen
            ? 'rgba(13, 21, 38, 0.97)'
            : 'linear-gradient(135deg, #22D3EE, #0891B2)',
          border: '1px solid rgba(34, 211, 238, 0.4)',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
        }}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
