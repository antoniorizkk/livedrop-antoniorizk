#!/usr/bin/env python3
"""
Shoplite Chat Interface
File: /src/chat-interface.py

A simple CLI client for interacting with the Shoplite RAG system deployed on Colab.
Connects to the Flask API exposed via ngrok.

NOTE: This version includes robust client-side logic to clean up the 'sources' output
for better user readability by filtering out internal instructions and large text chunks.
"""

import requests
import json
import sys
import time

# Update this when you start your Colab/ngrok tunnel
NGROK_URL = input("Enter your ngrok tunnel URL (e.g., https://xxxx.ngrok-free.app): ").strip()

if not NGROK_URL.startswith("http"):
    print("❌ Invalid ngrok URL. Please include http/https.")
    sys.exit(1)

CHAT_ENDPOINT = f"{NGROK_URL}/chat"
PING_ENDPOINT = f"{NGROK_URL}/ping"
HEALTH_ENDPOINT = f"{NGROK_URL}/health"

LOG_FILE = "chat_logs.txt"

def log_interaction(question, answer, sources, confidence):
    """Append each Q&A to a log file for evaluation."""
    # NOTE: We log the *original* sources here for evaluation,
    # even if we display the cleaned version to the user.
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps({
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "question": question,
            "answer": answer,
            "sources": sources,
            "confidence": confidence
        }, ensure_ascii=False))
        f.write("\n")

def check_health():
    """Check if backend is reachable."""
    try:
        r = requests.get(HEALTH_ENDPOINT, timeout=10)
        if r.status_code == 200:
            print("✅ Backend is healthy and reachable.\n")
            return True
        else:
            print(f"⚠️ Health check failed: {r.text}")
            return False
    except Exception as e:
        print(f"❌ Could not connect to backend: {e}")
        return False

def send_question(question):
    """Send question to backend /chat endpoint and process the response."""
    try:
        print("[Retrieving context...]")
        r = requests.post(CHAT_ENDPOINT, json={"question": question}, timeout=60)
        if r.status_code != 200:
            print(f"⚠️ Error from server: {r.status_code} - {r.text}")
            return None

        data = r.json()
        answer = data.get("answer", "No answer returned.")
        sources = data.get("sources", [])
        confidence = data.get("confidence", "Unknown")

        # --- LOGIC TO CLEAN UP SOURCES FOR DISPLAY (More Robust) ---
        clean_sources = []
        # Keywords commonly found in the LLM's internal thought process
        filter_keywords = [
            "Instructions:", "Answer:", "Final Answer:", "User question:",
            "Sources:", "The context is:", "Question:", "Thought:"
        ]
        
        # A set to track unique sources, preventing duplicates
        unique_clean_sources = set()

        for source in sources:
            source = source.strip() # Clean whitespace
            if not source:
                continue

            # 1. Filter out internal messages
            is_internal_message = any(keyword in source for keyword in filter_keywords)
            
            # 2. Filter out long text chunks that are not typical titles
            # Criteria: Longer than 80 chars AND contains sentence punctuation (., !, ?)
            is_long_text = len(source) > 80
            has_punctuation = any(p in source for p in ['.', '!', '?'])
            
            if not is_internal_message and not (is_long_text and has_punctuation):
                # Add to the set to ensure uniqueness
                unique_clean_sources.add(source)

        # Convert set back to list for display
        clean_sources = list(unique_clean_sources)
        # --- END CLEANUP LOGIC ---

        print("[Calling LLM...]\n")
        print(f"Answer: {answer}")
        
        # Display the cleaned list of sources
        print(f"Sources: {', '.join(clean_sources) if clean_sources else 'N/A'}")
        print(f"Confidence: {confidence}\n")

        # Save log (using the original, unfiltered sources)
        log_interaction(question, answer, sources, confidence)

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

def main():
    print("=== Shoplite Chat Interface ===")
    if not check_health():
        print("Exiting. Please check your Colab/ngrok deployment.")
        sys.exit(1)

    print("Type your questions below. Type 'exit' to quit.\n")

    while True:
        try:
            q = input("> ").strip()
            if q.lower() in ["exit", "quit"]:
                print("👋 Goodbye!")
                break
            if q:
                send_question(q)
        except (KeyboardInterrupt, EOFError):
            print("\n👋 Goodbye!")
            break

if __name__ == "__main__":
    main()