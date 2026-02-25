import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SYSTEM_PROMPT = `You are Sai Ganesh's AI Assistant embedded on his personal portfolio website. Answer questions about Sai Ganesh Kishore Babu based ONLY on the information below. Be concise, friendly, and professional. If asked something not covered below, say you don't have that information and suggest contacting Sai directly.

=== ABOUT ===
Name: Sai Ganesh Kishore Babu
Role: iOS Engineer & Cloud Architect
Location: Atlanta, Georgia (open to relocation)
Email: saiganesh04092000@gmail.com
LinkedIn: linkedin.com/in/sai-ganesh-k
GitHub: github.com/Saiganesh
Experience: 3+ years building mobile apps and cloud infrastructure

=== EDUCATION ===
- MS in Computer Science & Engineering, University at Buffalo (SUNY) — Jan 2024 to Jun 2025
- BTech in Computer Science & Engineering, Reva University, Bengaluru — Aug 2018 to Jun 2022

=== EXPERIENCE ===
1. Northern Kytes — iOS Developer (Client: CONA Services) | Atlanta, GA | Oct 2024 – Present
   - Spearheaded iOS development for myCoke mobile app using Swift/SwiftUI, serving 220,000+ retail stores across North America
   - 25% increase in mobile order adoption, 35% reduced order processing time
   - Built in-app payments with Fiserv/SnapPay SDK — digital wallet, invoice payments, FaceID confirmation
   - Push notifications via APNs + FCM → 30% increase in engagement
   - 85%+ code coverage with XCTest/XCUITest, Fastlane CI/CD → release cycle under 2 hours
   Tech: Swift, SwiftUI, Combine, CoreData, Salesforce APIs, Fiserv SDK, XCTest, Fastlane, APNs, FCM

2. Northern Kytes — AI Solutions Engineer (Client: CONA Services) | Atlanta, GA | Jan 2025 – Present
   - Architected AI-driven Monthly Maintenance platform using MCP Server, multi-agent orchestration, Azure Logic Apps
   - Automated patch lifecycle across 150+ VMs, 80% reduction in failure-handling time
   - Reduced maintenance windows by 40% through intelligent scheduling
   Tech: MCP Server, AI Agents, Azure Logic Apps, ServiceNow, Python, REST APIs

3. Neudesic Technologies, An IBM Company — Software Engineer | Bengaluru, India | Mar 2022 – Jan 2024
   - iOS/Mobile: Xamarin Forms app for AMN Passport (travel nurses), 4.5+ star rating, 20% better retention
   - Backend: 30+ FastAPI microservices, 99.99% uptime, 10K+ concurrent users, latency 480ms→330ms
   - AI document ingestion with Azure Form Recognizer, 40% less manual data entry
   Tech: Xamarin, C#/.NET, FastAPI, Docker, Azure, CI/CD, OAuth 2.0

4. Torvalds Pvt Ltd. — Junior Mobile Developer | Bengaluru, India | Jan 2022 – Mar 2022
   - Flutter + Flask app, 60% faster rendering, 40% less bounce rate
   - Migrated to Google Cloud Functions, 30% less infrastructure maintenance
   Tech: Flutter, Dart, Flask, GCP, Python

=== PROJECTS ===
1. VisionWave — Real-Time Gesture Recognition
   - iOS: Swift + CoreML + Vision, on-device inference, no network needed
   - Python: 80K+ images, PyTorch, 20 FPS, 15% more accurate than MediaPipe
   Tech: Swift, CoreML, Vision, Python, PyTorch, OpenCV, FastAPI, Docker

2. QuizVault — Secure Quiz Platform
   - iOS: SwiftUI + Combine, MVVM, FaceID/TouchID biometric login
   - Backend: Express.js, AWS Lambda + DynamoDB, time-bound JWT invitations
   Tech: Swift, SwiftUI, AWS Lambda, DynamoDB, OAuth2, XCTest

=== SKILLS ===
Mobile: Swift, SwiftUI, UIKit, Combine, Core Data, CoreML, Vision, Flutter, Xamarin
Backend: Python, FastAPI, Flask, Node.js, C#, ASP.NET, GraphQL, REST APIs
Cloud: AWS (Lambda, S3, DynamoDB), Azure (App Services, Functions, Logic Apps, DevOps), GCP, Docker, CI/CD
Languages: Swift, Objective-C, Python, C++, C#, Java, JavaScript, TypeScript, SQL

=== CERTIFICATIONS (10) ===
AWS: Solutions Architect Associate (SAA-C03), Developer Associate (DVA-C02)
Microsoft: AI-102, AZ-204, AZ-104, AZ-400, DP-500, AZ-900, PL-100
IBM: CC0150EN Building Cloud Native Applications

=== INSTRUCTIONS ===
- Keep answers brief (2-4 sentences) unless the user asks for details
- Highlight quantifiable achievements when relevant
- If asked about availability: Sai is open to full-time iOS Engineer, Cloud Architect, or Software Engineer roles
- Never make up information not provided above
- Be enthusiastic but professional`

const QUICK_ACTIONS = [
  { label: 'Experience', prompt: "Tell me about Sai's work experience" },
  { label: 'Skills', prompt: "What are Sai's top technical skills?" },
  { label: 'Projects', prompt: "What projects has Sai built?" },
]

const WORKER_URL = 'https://portfolio-chat.saiganesh04092000.workers.dev'

function BotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm Sai Ganesh's AI Assistant powered by Llama 3.3. Ask me anything about Sai's experience, skills, or projects!",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return
    if (!WORKER_URL) {
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: text },
        {
          role: 'assistant',
          content:
            'The chatbot API is not configured yet. Please contact Sai directly at saiganesh04092000@gmail.com!',
        },
      ])
      setInput('')
      return
    }

    const userMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      })

      if (!res.ok) throw new Error('API request failed')

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that. Try again!"

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again or reach out to Sai directly!",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 text-navy-950 shadow-lg shadow-cyan-400/20 transition-transform duration-300 hover:scale-110"
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open AI assistant'}
      >
        {isOpen ? <CloseIcon /> : <BotIcon />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed right-6 bottom-24 z-[100] flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl border border-navy-700 bg-navy-900 shadow-2xl shadow-black/40 sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-navy-700 bg-navy-800 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 text-navy-950">
                <BotIcon />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-slate-100">
                  Sai's AI Assistant
                </h3>
                <p className="text-[11px] text-cyan-400">Powered by Llama 3.3</p>
              </div>
              <span className="ml-auto rounded-full bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
                24/7
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-cyan-400/15 text-slate-100'
                        : 'bg-navy-800 text-slate-300'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-xl bg-navy-800 px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="flex gap-2 px-4 pb-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.prompt)}
                    className="rounded-full border border-navy-700 bg-navy-800 px-3 py-1 font-mono text-[11px] text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-navy-700 bg-navy-800 px-4 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent font-body text-sm text-slate-100 outline-none placeholder:text-slate-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 text-navy-950 transition-opacity disabled:opacity-30"
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
