import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cloud, 
  Code2, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  ExternalLink, 
  Award, 
  BookOpen, 
  ChevronRight,
  MessageSquare,
  X,
  Send,
  Terminal,
  Layers,
  Moon,
  Pipette,
  Download,
  Sparkles
} from 'lucide-react';
import Markdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PORTFOLIO_DATA } from './constants';
import { askAI } from './services/geminiService';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: `Hi! I'm ${PORTFOLIO_DATA.name.split(' ')[0]}'s AI assistant. Ask me anything about his experience with AWS, Data Engineering, or his projects!` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    const aiResponse = await askAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-900">
      {/* Atmospheric Background */}
      <div className="atmospheric-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight text-zinc-900">
            {PORTFOLIO_DATA.name}
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#stack" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-blue-600 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-600 hover:bg-white/50 rounded-full transition-all">
              <Moon className="w-5 h-5" />
            </button>
            <button className="p-2 text-zinc-600 hover:bg-white/50 rounded-full transition-all">
              <Pipette className="w-5 h-5" />
            </button>
            <a href="#contact" className="hidden md:block px-6 py-2.5 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 lg:pt-48 pb-24">
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-zinc-900 mb-2 leading-[0.9]">
                {PORTFOLIO_DATA.name}
              </h1>
              <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-blue-600 mb-8 leading-[0.9]">
                {PORTFOLIO_DATA.headline}
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mb-10">
                {PORTFOLIO_DATA.summary}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all">
                  View My Work
                </button>
                <button className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-50 transition-all">
                  <Download className="w-5 h-5" /> Download CV
                </button>
                <button className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 font-bold rounded-xl hover:bg-zinc-50 transition-all">
                  Get In Touch
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt={PORTFOLIO_DATA.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">Experience</h2>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>
          
          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 rounded-[2rem]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{exp.role}</h3>
                    <div className="text-blue-600 font-semibold text-lg">{exp.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-500 font-medium">{exp.period}</div>
                    <div className="text-zinc-400 text-sm">{exp.location}</div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex gap-4 text-zinc-600 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="stack" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">Skills</h2>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PORTFOLIO_DATA.skills.map((skill, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {skill.category.includes('Data') && <Database className="w-6 h-6 text-blue-600" />}
                    {skill.category.includes('Cloud') && <Cloud className="w-6 h-6 text-blue-600" />}
                    {skill.category.includes('Database') && <Layers className="w-6 h-6 text-blue-600" />}
                    {skill.category.includes('Tools') && <Code2 className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-600 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">Certifications</h2>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.certifications.map((cert, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                  <div className="text-zinc-500 font-medium">{cert.issuer} • {cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-24 rounded-[3rem] bg-zinc-900 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
                Let's build something <br /> extraordinary.
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Ready to transform your data infrastructure? Let's connect and discuss how I can help your team scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20">
                  Get In Touch
                </a>
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-[15px] font-medium">
        <div>© {new Date().getFullYear()} {PORTFOLIO_DATA.name.toUpperCase()}. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-8">
          <a href={PORTFOLIO_DATA.contact.github} className="hover:text-blue-600 transition-colors">GITHUB</a>
          <a href={PORTFOLIO_DATA.contact.linkedin} className="hover:text-blue-600 transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-blue-600 transition-colors">RESUME</a>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white border border-zinc-200 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-6 border-b border-zinc-100 bg-blue-600 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Portfolio AI</div>
                    <div className="text-white/70 text-xs">Online & Ready</div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-zinc-50/50">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm",
                      msg.role === 'user' 
                        ? "bg-blue-600 text-white rounded-tr-none" 
                        : "bg-white text-zinc-800 rounded-tl-none border border-zinc-100"
                    )}>
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium ml-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                    Thinking...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-6 border-t border-zinc-100 bg-white">
                <div className="relative">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about my AWS experience..."
                    className="w-full bg-zinc-100 border-none rounded-2xl py-4 pl-5 pr-14 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={!chatInput.trim() || isTyping}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95",
            isChatOpen ? "bg-zinc-900 text-white" : "bg-blue-600 text-white"
          )}
        >
          {isChatOpen ? <X className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
}
