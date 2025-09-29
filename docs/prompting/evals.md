# RAG System Evaluation

## Retrieval Quality Tests (10 tests)

| Test ID | Question | Expected Documents | Pass Criteria |
|---------|----------|-------------------|---------------|
| R01 | How do I create a seller account on Shoplite? | Document 7: Shoplite Seller Account Setup | Retrieved docs contain expected title |
| R02 | What are Shoplite's return policies and how do I track my order status? | Document 5: Return and Refund Policies + Document 4: Order Tracking and Delivery | Retrieved docs are relevant to question |
| R03 | Which payment methods are supported during checkout? | Document 3: Checkout and Payment Security | Retrieved docs contain expected title |
| R04 | How does Shoplite protect customer data? | Document 13: Security and Privacy Policies | Retrieved docs contain expected title |
| R05 | Can sellers manage inventory across multiple warehouses? | Document 8: Inventory Management | Retrieved docs contain expected title |
| R06 | How can I track shipments for multiple items in one order? | Document 4: Order Tracking and Delivery | Retrieved docs contain expected title |
| R07 | What commission rates apply to sellers? | Document 9: Commission and Fees | Retrieved docs contain expected title |
| R08 | How does Shoplite ensure review authenticity? | Document 6: Product Reviews and Ratings | Retrieved docs contain expected title |
| R09 | Which APIs can developers use for managing orders and payments? | Document 12: API Documentation Overview | Retrieved docs contain expected title |
| R10 | How are disputes between buyers and sellers resolved? | Document 10: Customer Support Procedures + Document 5: Return and Refund Policies | Retrieved docs are relevant to question |

---

## Response Quality Tests (15 tests)

| Test ID | Question | Required Keywords | Forbidden Terms | Expected Behavior |
|---------|----------|-------------------|-----------------|-------------------|
| Q01 | How do I create a seller account on Shoplite? | ["seller registration", "business verification", "3–5 business days"] | ["instant approval"] | Direct answer with citation |
| Q02 | What are Shoplite's return policies and how do I track my order status? | ["14-day return", "order tracking", "refund process"] | ["lifetime returns"] | Multi-source synthesis |
| Q03 | Which payment methods are supported during checkout? | ["credit and debit cards", "PayPal", "gift cards", "PCI-DSS"] | ["cash on delivery"] | Direct factual answer |
| Q04 | How does Shoplite protect customer data? | ["TLS 1.3", "AES-256", "GDPR", "CCPA"] | ["unencrypted storage"] | Security-focused answer |
| Q05 | How are promotional codes applied? | ["apply promo code", "case-sensitive", "percentage discounts"] | ["automatic discounts"] | Direct answer with clear conditions |
| Q06 | Can sellers manage inventory across multiple warehouses? | ["geo-based inventory", "multiple warehouses", "availability"] | ["no multi-location support"] | Clear yes with evidence |
| Q07 | What authentication steps are required for login? | ["two-factor authentication", "email verification", "strong password"] | ["weak login"] | Multi-source synthesis |
| Q08 | How do sellers handle refunds for defective products? | ["full refund", "defective items", "3 business days"] | ["no refunds for defects"] | Clear refund policy answer |
| Q09 | Which APIs can developers use for managing orders and payments? | ["order retrieval", "payment confirmation", "OAuth 2.0"] | ["SOAP API"] | API explanation with examples |
| Q10 | How does Shoplite prevent overselling? | ["stock locking", "synchronization", "out of stock alert"] | ["no inventory checks"] | Combined cart + inventory answer |
| Q11 | What commission rates apply to sellers? | ["8% to 15%", "premium sellers", "subscription plans"] | ["zero commission"] | Fee structure explanation |
| Q12 | How does Shoplite support low-connectivity mobile users? | ["offline browsing", "cached product pages", "sync updates"] | ["no offline support"] | App-focused answer |
| Q13 | How are disputes resolved between buyers and sellers? | ["mediation team", "refund timelines", "dispute escalation"] | ["no dispute process"] | Multi-source answer |
| Q14 | How does Shoplite ensure review authenticity? | ["verified buyers", "review badge", "AI moderation"] | ["anyone can review"] | Review verification answer |
| Q15 | What best practices should developers follow? | ["error handling", "API tokens", "rate limits", "webhooks"] | ["hard-coded keys"] | Developer best practices synthesis |

---

## Edge Case Tests (5 tests)

| Test ID | Scenario | Expected Response Type |
|---------|----------|----------------------|
| E01 | User asks: "Does Shoplite sell cars?" | Refusal with explanation (not in KB) |
| E02 | User asks: "Tell me everything about Shoplite." | Clarification request (too broad) |
| E03 | User asks unrelated: "What is the weather in Paris?" | Refusal with explanation (out of scope) |
| E04 | User asks incomplete: "How do I register?" | Clarification request (buyer or seller?) |
| E05 | User provides conflicting info: "Refund after 60 days, is it possible?" | Refusal citing correct 14-day return window |
