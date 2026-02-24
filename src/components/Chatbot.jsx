import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SYSTEM_PROMPT = `You are Sai Ganesh's AI Assistant embedded on his personal portfolio website. Answer questions about Sai Ganesh Kishore Babu based ONLY on the information below. Be concise, friendly, and professional. If asked something not covered below, say you don't have that information and suggest contacting Sai directly.

=== ABOUT ===
Name: Sai Ganesh Kishore Babu
Role: Software Engineer & AI Solutions Architect
Location: Atlanta, Georgia (open to relocation)
Email: saiganesh04092000@gmail.com
LinkedIn: linkedin.com/in/sai-ganesh-k
GitHub: github.com/Saiganesh
Experience: 3+ years

=== EDUCATION ===
- Master's in Computer Science and Engineering, University at Buffalo (SUNY) — Jan 2024 to Jun 2025
- Bachelor of Technology in Computer Science and Engineering, Reva University, Bengaluru — Aug 2018 to Jun 2022

=== EXPERIENCE ===
1. Northern Kytes — AI Solutions Engineer (Client: Cona Services) | Atlanta, Georgia | Jan 2025 – Present
   - Architected end-to-end AI-driven Monthly Maintenance platform using MCP Server, multi-agent orchestration, and Azure Logic Apps
   - Automated patch lifecycle management across 150+ VMs with zero manual intervention, reducing failure-handling time by 80%
   - Designed fault-tolerant autonomous agents with retry logic, root cause isolation, self-healing workflows
   - Automated 16-step maintenance lifecycle using Azure Resource Graph queries, parallel execution, conditional branching
   - Built unified integration layer connecting Landesk REST APIs, Azure Monitor, Azure Backup, ServiceNow
   - Reduced maintenance windows by 40% through intelligent scheduling and parallel VM processing
   Tech: MCP Server, Azure Logic Apps, AI Agents, ServiceNow, Python, REST APIs, Azure Resource Graph

2. Neudesic Technologies (IBM Company) — Software Engineer | Bengaluru, India | Mar 2022 – Jan 2024
   - Developed 30+ modular microservices using Python FastAPI and SQLAlchemy
   - Engineered AI-powered document ingestion pipeline using Azure Form Recognizer
   - Refactored legacy .NET backends to containerized FastAPI services with Docker and CI/CD
   - Implemented OAuth 2.0 + JWT authentication with Azure AD B2C
   - Achieved 99.99% uptime across 10K+ concurrent users, cut latency from 480ms to 330ms
   - Built Azure Monitor dashboards reducing mean time to resolution by 40%
   Tech: Python, FastAPI, Docker, Azure, CI/CD, OAuth 2.0, Microservices, SQLAlchemy

3. Torvalds Pvt Ltd. — Junior Software Developer | Bengaluru, India | Jan 2022 – Mar 2022
   - Built mobile app with Flutter and Flask APIs, 60% faster rendering
   - Migrated backend to Google Cloud Functions, reduced infra maintenance by 30%
   - Cut mobile API latency by 18ms through query optimization and async programming
   Tech: Flutter, Flask, GCP, Python, SQL, REST APIs

=== PROJECTS ===
1. VisionWave: Vision Based Gesture Recognition System (Jan 2025)
   - Trained ResNet18, EfficientNet-B0, InceptionV3 on 80K+ images with PyTorch
   - Edge deployment via mixed precision training and quantization
   - Real-time webcam client at 20 FPS (GPU), 15% higher accuracy than MediaPipe
   Tech: Python, PyTorch, OpenCV, Flask, Docker

2. QuizVault: Secure Quiz Management Platform (Jul 2021)
   - Angular frontend with route guards, role-based dashboards, RxJS timers
   - ASP.NET Core REST APIs with EF Core, AutoMapper, layered architecture
   - Secure invitation tokens with time-bound JWTs
   Tech: Angular, C#.NET, Azure SQL, Azure App Services, JWT, OAuth 2.0

=== SKILLS ===
Languages: Python, C++, C#, Java, JavaScript, TypeScript, Dart, SQL, HTML/CSS
Frameworks: FastAPI, Flask, PyTorch, OpenCV, SQLAlchemy, ReactJS, Angular, Flutter, Xamarin, Entity Framework, ASP.NET
Databases: MySQL, PostgreSQL, Azure SQL
Cloud & DevOps: Microsoft Azure (App Services, Logic Apps, Functions, Form Recognizer, Resource Graph, Application Insights, AD B2C), GCP, AWS, Docker, Azure DevOps, GitHub Actions, CI/CD
Architecture: Microservices, REST APIs, OAuth2, JWT, Distributed Systems, AI Agents, Event-driven Architecture

=== CERTIFICATIONS (13 total) ===
Microsoft: AZ-900, AI-102, AZ-204, AZ-104, DP-500, AZ-400, PL-100, SC-900, AI-900, DP-900
IBM: CC0150EN Building Cloud Native and Multicloud Applications, CC0103EN IBM Cloud Essentials V3, CC0101EN Introduction to Cloud

=== INSTRUCTIONS ===
- Keep answers brief (2-4 sentences) unless the user asks for details
- Highlight quantifiable achievements when relevant
- If asked about availability: Sai is open to full-time Software Engineer, Cloud Engineer, or AI Engineer roles
- Never make up information not provided above
- Be enthusiastic but professional`

const QUICK_ACTIONS = [
  { label: 'Experience', prompt: "Tell me about Sai's work experience" },
  { label: 'Skills', prompt: "What are Sai's top technical skills?" },
  { label: 'Projects', prompt: "What projects has Sai built?" },
]

const WORKER_URL = import.meta.env.VITE_CHAT_API_URL || ''

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
