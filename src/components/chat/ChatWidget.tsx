"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { getBotReply, greeting, quickReplies, type ChatAction } from "@/lib/chatbot";
import { useScrollTo } from "@/hooks/useScrollTo";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  action?: ChatAction;
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleOpen = () => {
    setOpen(true);
    setMessages((prev) =>
      prev.length === 0
        ? [{ id: createId(), sender: "bot", text: greeting }]
        : prev
    );
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: createId(), sender: "user", text: trimmed },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: createId(), sender: "bot", text: reply.text, action: reply.action },
      ]);
    }, 650);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleAction = (action: ChatAction) => {
    if (action.href.startsWith("#")) {
      scrollTo(action.href);
      setOpen(false);
    } else if (action.href.startsWith("http")) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else {
      const link = document.createElement("a");
      link.href = action.href;
      link.download = "";
      link.click();
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-strong fixed bottom-24 right-4 z-50 flex h-[75vh] max-h-[520px] w-[92vw] max-w-[360px] flex-col overflow-hidden rounded-3xl shadow-2xl sm:right-6"
          >
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-neon-cyan/15 via-neon-blue/15 to-neon-purple/15 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black">
                <Bot size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-bold">Saravanan&apos;s Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon-cyan" />
                  Online
                </p>
              </div>
              <button
                data-cursor-hover
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-white/5 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto p-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col gap-2 ${
                    message.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-neon-cyan to-neon-blue text-black"
                        : "glass text-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.action && (
                    <button
                      data-cursor-hover
                      onClick={() => handleAction(message.action!)}
                      className="rounded-full border border-neon-blue/30 bg-neon-blue/5 px-3 py-1.5 text-xs font-medium text-neon-cyan hover:bg-neon-blue/10"
                    >
                      {message.action.label}
                    </button>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="glass flex w-fit items-center gap-1 rounded-2xl px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-neon-cyan"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto border-t border-white/10 p-3">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  data-cursor-hover
                  onClick={() => sendMessage(qr.message)}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted hover:border-neon-blue/40 hover:text-neon-cyan"
                >
                  {qr.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Chat message"
                className="glass flex-1 rounded-full border-0 bg-transparent px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:ring-1 focus:ring-neon-blue"
              />
              <button
                type="submit"
                data-cursor-hover
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black transition-transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        data-cursor-hover
        onClick={() => (open ? setOpen(false) : handleOpen())}
        aria-label={open ? "Close chat" : "Open chat"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="glow-blue fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black shadow-xl sm:right-6"
      >
        {!open && messages.length === 0 && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full border-2 border-neon-cyan"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  );
}
