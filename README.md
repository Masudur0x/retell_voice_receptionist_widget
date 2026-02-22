# 🎙️ Retell AI Modern Voice Widget

A premium, high-performance voice widget for Retell AI built with Next.js, Framer Motion, and Tailwind CSS. Designed to be hosted on Vercel or Netlify and embedded into any website (WordPress, Shopify, custom HTML, etc.).

![Premium Design](https://img.shields.io/badge/Design-Premium-red)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20|%20Tailwind%20|%20Lucide-black)

## ✨ Features

- **🚀 Instant Deployment**: Ready to be hosted on Vercel or Netlify.
- **🎨 Premium Aesthetics**: Sleek Black & Red theme with glassmorphism effects.
- **🔄 Interactive UI**: "Talk to us" tooltip on hover, smooth scaling, and rotation effects.
- **📡 Secure API**: Backend proxy to keep your Retell API keys hidden from the frontend.
- **📱 Responsive**: Works beautifully on mobile and desktop browsers.
- **🎙️ Voice Visualization**: Real-time pulsing animations when the AI is speaking.

## 🛠️ Prerequisites

Before you start, make sure you have:
- A [Retell AI](https://www.retellai.com/) account.
- A Retell **API Key** (stored securely).
- A documented **Agent ID**.

## 🚀 Quick Start

### 1. Local Setup

1. **Clone the repository** (or copy the files).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   RETELL_API_KEY=your_retell_api_key_here
   RETELL_AGENT_ID=your_agent_id_here
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/widget](http://localhost:3000/widget) to see the widget.

## 🌍 Deployment

### Hosting on Vercel (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Connect the repository to **Vercel**.
3. Vercel will auto-detect Next.js. Expand the **Environment Variables** section.
4. Add `RETELL_API_KEY` and `RETELL_AGENT_ID`.
5. Deploy! Your widget will be available at `https://your-site.vercel.app/widget`.

### Hosting on Netlify
1. Push your code to a GitHub repository.
2. Connect the repository to **Netlify**.
3. Go to **Site Configuration > Environment Variables**.
4. Add `RETELL_API_KEY` and `RETELL_AGENT_ID`.
5. Deploy! Your widget will be available at `https://your-site.netlify.app/widget`.

## 📦 How to Embed

Once deployed, you can embed this widget on **any website** (including WordPress) using two simple script tags.

```html
<!-- 1. Define the widget URL -->
<script>
  window.RETELL_WIDGET_URL = 'https://your-hosted-widget.netlify.app/widget';
</script>

<!-- 2. Load the widget loader -->
<script src="https://your-hosted-widget.netlify.app/loader.js"></script>
```

### WordPress Integration
1. Go to your WordPress Dashboard.
2. Install a plugin like "Header and Footer Scripts" or use a "Custom HTML" block in the footer.
3. Paste the code above.

## 🔒 Security
Your Retell API Key is **never exposed** to the user's browser. It remains on the server-side within the Next.js API route, ensuring your account stays secure.

---

Built with ❤️ for Retell AI users.
