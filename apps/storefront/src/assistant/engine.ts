import { getOrderStatus } from "../lib/api";

export interface EngineResponse {
  answer: string;
  sources: string[]; // cleaned sources
  confidence: "High" | "Medium" | "Low";
}

// Utility to clean sources, similar to your Python logic
function cleanSources(rawSources: string[] = []): string[] {
  const filterKeywords = [
    "Instructions:", "Answer:", "Final Answer:", "User question:",
    "Sources:", "The context is:", "Question:", "Thought:"
  ];

  const uniqueCleanSources = new Set<string>();

  for (let src of rawSources) {
    src = src.trim();
    if (!src) continue;

    const isInternal = filterKeywords.some((kw) => src.includes(kw));
    const isLongText = src.length > 80 && /[.!?]/.test(src);

    if (!isInternal && !isLongText) {
      uniqueCleanSources.add(src);
    }
  }

  return Array.from(uniqueCleanSources);
}

export async function askSupport(query: string): Promise<EngineResponse> {
  const NGROK_URL = import.meta.env.VITE_NGROK_URL;
  console.log("askSupport called with query:", query);
  console.log("NGROK_URL:", NGROK_URL);

  // Detect order ID locally
  const orderIdMatch = query.match(/\b[A-Z0-9]{10,}\b/);
  let localOrderInfo: string | null = null;

  if (orderIdMatch) {
    const orderId = orderIdMatch[0];
    console.log("Detected orderId:", orderId);
    try {
      const status = await getOrderStatus(orderId);
      console.log("Order status API response:", status);
      if (status) localOrderInfo = `Order ${orderId.slice(-4)} Status: ${status}`;
    } catch (err) {
      console.error("Error fetching order status:", err);
      localOrderInfo = `Order ${orderId.slice(-4)} Status: Unknown`;
    }
  }

  // Call ngrok RAG API
  try {
    console.log("Sending fetch to:", `${NGROK_URL}/chat`);
    const res = await fetch(`${NGROK_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: query }),
    });
    console.log("Fetch response status:", res.status);
    if (!res.ok) throw new Error(`Server returned ${res.status}`);

    const data = await res.json();
    console.log("Response JSON:", data);

    const cleanedSources = cleanSources(data.sources);

    const finalAnswer = localOrderInfo
      ? `${data.answer}\n\n${localOrderInfo}`
      : data.answer;

    return {
      answer: finalAnswer,
      sources: cleanedSources,
      confidence: data.confidence || "High",
    };
  } catch (err) {
    console.error("Error in askSupport fetch block:", err);
    return {
      answer:
        "❌ Unable to reach the Shoplite support system. Please try again later.",
      sources: [],
      confidence: "Low",
    };
  }
}
