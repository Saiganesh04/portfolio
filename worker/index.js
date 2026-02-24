// Cloudflare Worker — Groq API Proxy
// Deploy this to Cloudflare Workers (free tier: 100K requests/day)
//
// Setup:
// 1. Go to https://console.groq.com and create a free API key
// 2. Go to https://dash.cloudflare.com → Workers & Pages → Create
// 3. Name it "portfolio-chat" and paste this code
// 4. Go to Settings → Variables → add GROQ_API_KEY with your key
// 5. Deploy and copy the worker URL (e.g. https://portfolio-chat.YOUR_SUBDOMAIN.workers.dev)
// 6. Set VITE_CHAT_API_URL in your portfolio's .env file to that URL

const ALLOWED_ORIGIN = '*' // Replace with your portfolio URL in production

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      const { messages } = await request.json()

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      })

      const data = await response.json()

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        },
      })
    } catch {
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        },
      })
    }
  },
}
