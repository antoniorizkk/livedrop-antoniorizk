# Shoplite Ground Truth Q&A

### Q01: How do I create a seller account on Shoplite?  
**Expected retrieval context:** Document 7: Shoplite Seller Account Setup  
**Authoritative answer:** To create a seller account, users must visit the Shoplite seller registration portal, provide business details such as tax ID and bank information, upload proof of ownership, and complete identity verification. The review process typically takes 3–5 business days.  
**Required keywords in LLM response:** ["seller registration", "business verification", "3–5 business days"]  
**Forbidden content:** ["instant approval", "no verification required", "personal accounts"]

---

### Q02: What are Shoplite's return policies and how do I track my order status?  
**Expected retrieval context:** Document 5: Shoplite Return and Refund Policies + Document 4: Shoplite Order Tracking and Delivery  
**Authoritative answer:** Shoplite allows returns within 14 days for eligible items, with refunds processed to the original payment method within 5–7 business days. Buyers can initiate returns through their account and track status in real time using order tracking numbers provided after checkout.  
**Required keywords in LLM response:** ["14-day return", "order tracking", "refund process"]  
**Forbidden content:** ["no returns accepted", "lifetime returns"]

---

### Q03: Which payment methods are supported during checkout?  
**Expected retrieval context:** Document 3: Shoplite Checkout and Payment Security  
**Authoritative answer:** Shoplite supports major credit and debit cards, PayPal, digital wallets, and Shoplite gift cards. All transactions use PCI-DSS-compliant gateways with tokenization for security.  
**Required keywords in LLM response:** ["credit and debit cards", "PayPal", "gift cards", "PCI-DSS"]  
**Forbidden content:** ["cash on delivery", "unsupported methods"]

---

### Q04: How does Shoplite protect customer data?  
**Expected retrieval context:** Document 13: Shoplite Security and Privacy Policies  
**Authoritative answer:** Shoplite protects customer data with TLS 1.3 for data in transit, AES-256 for data at rest, GDPR and CCPA compliance, and adaptive login security including CAPTCHA and IP-based risk scoring.  
**Required keywords in LLM response:** ["TLS 1.3", "AES-256", "GDPR", "CCPA"]  
**Forbidden content:** ["unencrypted storage", "no compliance"]

---

### Q05: How are promotional codes applied during checkout?  
**Expected retrieval context:** Document 14: Shoplite Promotional Codes and Discounts  
**Authoritative answer:** Buyers can apply promotional codes at checkout, which instantly adjust totals if valid. Codes may apply percentage discounts, fixed reductions, or free shipping, and they are case-sensitive with expiration or redemption limits.  
**Required keywords in LLM response:** ["apply promo code", "case-sensitive", "percentage discounts"]  
**Forbidden content:** ["automatic discounts with no code", "unlimited use"]

---

### Q06: Can sellers manage inventory across multiple warehouses?  
**Expected retrieval context:** Document 8: Shoplite Inventory Management  
**Authoritative answer:** Yes. Shoplite supports geo-based inventory for sellers with multiple warehouses, ensuring buyers only see available stock in their region.  
**Required keywords in LLM response:** ["geo-based inventory", "multiple warehouses", "availability"]  
**Forbidden content:** ["no multi-location support"]

---

### Q07: What security measures are used for login and authentication?  
**Expected retrieval context:** Document 1: Shoplite User Registration Process + Document 13: Shoplite Security and Privacy Policies  
**Authoritative answer:** Shoplite enforces strong passwords, email verification, optional two-factor authentication, and adaptive security measures such as CAPTCHA and suspicious login notifications.  
**Required keywords in LLM response:** ["two-factor authentication", "email verification", "strong password"]  
**Forbidden content:** ["no password rules", "weak login"]

---

### Q08: How do sellers view and respond to customer reviews?  
**Expected retrieval context:** Document 6: Shoplite Product Reviews and Ratings  
**Authoritative answer:** Sellers can monitor product reviews on item pages, where buyers leave ratings and feedback. Shoplite allows sellers to publicly respond to reviews, helping address concerns or thank customers.  
**Required keywords in LLM response:** ["publicly respond", "ratings", "feedback"]  
**Forbidden content:** ["delete reviews", "anonymous seller replies"]

---

### Q09: What steps are required for payment security during checkout?  
**Expected retrieval context:** Document 3: Shoplite Checkout and Payment Security + Document 13: Shoplite Security and Privacy Policies  
**Authoritative answer:** Payments are processed via PCI-DSS-compliant gateways with tokenization and end-to-end encryption. Shoplite applies fraud detection algorithms, ensures secure redirection for sensitive inputs, and complies with international data protection laws.  
**Required keywords in LLM response:** ["PCI-DSS", "tokenization", "fraud detection"]  
**Forbidden content:** ["manual processing", "unencrypted payment"]

---

### Q10: How can I track shipments for multiple items in one order?  
**Expected retrieval context:** Document 4: Shoplite Order Tracking and Delivery  
**Authoritative answer:** Shoplite supports partial shipments, meaning each item has its own tracking number visible in the buyer’s dashboard. Notifications are sent at each stage, from packing to delivery.  
**Required keywords in LLM response:** ["partial shipments", "tracking number", "buyer dashboard"]  
**Forbidden content:** ["single tracking only", "no partial support"]

---

### Q11: How do sellers handle refunds for defective products?  
**Expected retrieval context:** Document 5: Shoplite Return and Refund Policies  
**Authoritative answer:** For defective or incorrect items, sellers must provide full refunds including return shipping. If sellers do not respond within 3 business days, Shoplite automatically approves the refund.  
**Required keywords in LLM response:** ["full refund", "defective items", "3 business days"]  
**Forbidden content:** ["no refunds for defects"]

---

### Q12: Which APIs can developers use for managing orders and payments?  
**Expected retrieval context:** Document 12: Shoplite API Documentation Overview  
**Authoritative answer:** Developers can use RESTful API endpoints for order retrieval, payment confirmation, and account management. APIs are authenticated with OAuth 2.0 and support JSON-based requests and responses.  
**Required keywords in LLM response:** ["order retrieval", "payment confirmation", "OAuth 2.0"]  
**Forbidden content:** ["SOAP API", "unauthenticated access"]

---

### Q13: How does Shoplite prevent overselling by sellers?  
**Expected retrieval context:** Document 8: Shoplite Inventory Management + Document 2: Shoplite Shopping Cart Features  
**Authoritative answer:** Shoplite prevents overselling by locking stock when checkout begins and synchronizing inventory across systems. The cart also alerts users if an item goes out of stock before completing checkout.  
**Required keywords in LLM response:** ["stock locking", "synchronization", "out of stock alert"]  
**Forbidden content:** ["no inventory checks"]

---

### Q14: What commission rates apply to sellers, and are there discounts?  
**Expected retrieval context:** Document 9: Shoplite Commission and Fees  
**Authoritative answer:** Shoplite charges commissions between 8% and 15% depending on category. Premium sellers may qualify for reduced rates, and subscription plans offer additional discounts and analytics.  
**Required keywords in LLM response:** ["8% to 15%", "premium sellers", "subscription plans"]  
**Forbidden content:** ["zero commission", "flat free service"]

---

### Q15: How does Shoplite support mobile app users with low connectivity?  
**Expected retrieval context:** Document 11: Shoplite Mobile App Features  
**Authoritative answer:** The mobile app includes offline browsing for cached product pages and wish lists, syncing updates once internet connectivity is restored.  
**Required keywords in LLM response:** ["offline browsing", "cached product pages", "sync updates"]  
**Forbidden content:** ["no offline support"]

---

### Q16: How are disputes between buyers and sellers resolved?  
**Expected retrieval context:** Document 10: Shoplite Customer Support Procedures + Document 5: Shoplite Return and Refund Policies  
**Authoritative answer:** Disputes are escalated to Shoplite’s mediation team if buyers and sellers cannot agree. Refund timelines and return policies apply, with Shoplite issuing final decisions to ensure fairness.  
**Required keywords in LLM response:** ["mediation team", "refund timelines", "dispute escalation"]  
**Forbidden content:** ["no dispute process"]

---

### Q17: How does Shoplite ensure review authenticity?  
**Expected retrieval context:** Document 6: Shoplite Product Reviews and Ratings  
**Authoritative answer:** Shoplite only allows verified buyers who completed a purchase to leave reviews. Verified reviews are marked with a badge, and AI moderation removes spam or offensive content.  
**Required keywords in LLM response:** ["verified buyers", "review badge", "AI moderation"]  
**Forbidden content:** ["anyone can review", "no moderation"]

---

### Q18: What best practices should developers follow when integrating Shoplite APIs?  
**Expected retrieval context:** Document 15: Shoplite Developer Best Practices + Document 12: Shoplite API Documentation Overview  
**Authoritative answer:** Developers should implement error handling with retries, secure API tokens, avoid hard-coding secrets, respect rate limits, and use webhooks instead of polling for efficiency.  
**Required keywords in LLM response:** ["error handling", "API tokens", "rate limits", "webhooks"]  
**Forbidden content:** ["hard-coded keys", "no error handling"]

---

### Q19: How can sellers monitor the effectiveness of discount campaigns?  
**Expected retrieval context:** Document 14: Shoplite Promotional Codes and Discounts + Document 9: Shoplite Commission and Fees  
**Authoritative answer:** Sellers can access analytics dashboards in the Seller Dashboard, showing redemption rates and revenue impact of promotions. Subscription plans provide more advanced insights.  
**Required keywords in LLM response:** ["analytics dashboards", "redemption rates", "revenue impact"]  
**Forbidden content:** ["no analytics available"]

---

### Q20: What compliance standards does Shoplite follow for data privacy?  
**Expected retrieval context:** Document 13: Shoplite Security and Privacy Policies  
**Authoritative answer:** Shoplite complies with GDPR and CCPA, conducts regular penetration testing, and follows mandatory notification protocols within 72 hours of any breach.  
**Required keywords in LLM response:** ["GDPR", "CCPA", "72 hours"]  
**Forbidden content:** ["no compliance", "undefined policies"]
