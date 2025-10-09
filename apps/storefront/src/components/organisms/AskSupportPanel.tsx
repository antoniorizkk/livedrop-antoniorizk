import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { askSupport } from "../../assistant/engine";
import { X, MessageCircle, Loader2 } from "lucide-react";

export default function AskSupportPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<{
    answer: string;
    source: string | null;
    confidence: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    try {
      const res = await askSupport(query);
      setResponse({
        answer: res.answer,
        source: res.sources && res.sources.length > 0 ? res.sources[0] : null,
        confidence: res.confidence,
      });
    } catch (err) {
      setResponse({
        answer:
          "Something went wrong while contacting the assistant. Please try again.",
        source: null,
        confidence: "Low",
      });
    }
    setLoading(false);
  }

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg z-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(true)}
        aria-label="Open support chat"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 flex flex-col border-l"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Ask Storefont Support
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close support panel"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {response ? (
                <div className="bg-gray-50 p-3 rounded-xl border">
                  <p className="text-gray-800 whitespace-pre-line">
                    {response.answer}
                  </p>
                  {response.source && (
                    <p className="mt-2 text-xs text-gray-500">
                      Source: {response.source} | Confidence:{" "}
                      {response.confidence}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 text-center mt-8">
                  Ask a question about your order or Shoplite policies.
                </p>
              )}
            </div>

            {/* Input area */}
            <div className="border-t p-3 bg-gray-50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Support question input"
                />
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center gap-2"
                  aria-label="Send support question"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : "Ask"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
