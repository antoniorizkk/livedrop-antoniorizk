# Live Drops — Antonio Rizk

This repository contains the system design for **Live Drops: Flash-Sale & Follow Platform**, covering architecture, data model, APIs, caching, and tradeoffs.

## Diagrams

Here are the Excalidraw links for each deliverable (replace with your URLs):

- **Deliverable 1 — Architecture:** [https://excalidraw.com/#json=_Dmt0EgiYFPt1OtdQDtQ1,WRAWQuhkcKUYBuA4wb70Qw]  
- **Deliverable 2 — Data Model:** [https://excalidraw.com/#json=BFD-Scuot0SHN7WuvEgaJ,3FgU4bc1nLi_KRYV95TY8Q]  
- **Deliverable 3 — API Contract:** [https://excalidraw.com/#json=YRXZZKWhVpAAzzndIEw4T,HUqGgHVz86dR5MtNQBO0Tg]  
- **Deliverable 4 — Caching & Invalidation:** [https://excalidraw.com/#json=N1Dfwr7Qf8BXoxLoxcFII,kf8ouQAgOwSz5Sc70pt6MA]  
- **Deliverable 5 — Tradeoffs & Reasoning:** [https://excalidraw.com/#json=_VShDuMjbZrGIaIZgeNiQ,JYdhJGf54KhTV2s0LCsgPw]  

## Summary

- **Architecture:** Stateless microservices with event bus, API gateway, SQL for orders/inventory, NoSQL for followers, Redis and CDN for caching.  
- **Data Model:** Entities include Users, Creators, Products, Drops, Orders, Inventory, Notifications, and Idempotency keys; follower relationships support large audiences.  
- **API:** REST for transactions, GraphQL for browsing; internal APIs for inventory, notifications, and search.  
- **Caching:** Redis and CDN with event-driven invalidation for critical data, TTL for static or low-change data.  
- **Tradeoffs:** Strong consistency for orders/inventory, eventual consistency for followers and browsing; balances performance, scalability, and operational complexity.  
