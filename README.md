# AI Content Generator – Powered by Google Gemini | MERN Stack
A modern web application that helps users generate high-quality content using Google Gemini, tailored for blogs, articles, product descriptions, and more. Built with the MERN stack, the app provides a fast, clean, and intuitive experience for users to boost their writing productivity.

# 🚀 Features
🧠 AI-Powered Content Generation
Users can generate content by providing a topic, keywords, or prompt. The app uses the Gemini Pro API to deliver natural-sounding, high-quality output instantly.

📝 Multiple Content Modes
Choose different content types: blog post, product description, marketing copy, or general paragraph — Gemini adapts to your needs.

🎯 Rate Limiting with Token System
Each user has a limited number of daily requests. Once exhausted, they can wait for reset or purchase more tokens to continue generating content.

💳 Stripe-Powered Subscriptions
Integrated Stripe payment system with tiered subscriptions. Users can upgrade for more tokens or unlock premium generation limits.

⏰ CRON-Managed Subscriptions
Background CRON jobs reset tokens and manage recurring subscriptions automatically.

🧾 Content History
Users can view, copy, and download previously generated content from their personal dashboard.

🔒 Secure Auth & Roles
User authentication handled via JWT with protected routes and token verification.

# 🛠 Tech Stack
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

AI API: Google Gemini Pro

Authentication: JWT

Payments: Stripe

Scheduling: node-cron

# 📸 Screenshots
![Image](https://github.com/user-attachments/assets/aea0081a-d706-4940-89eb-2d8c934112ec)
