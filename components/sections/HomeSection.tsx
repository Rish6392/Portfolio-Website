"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, marqueeSkills } from "@/lib/data";
import type { SectionId } from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";

export default function HomeSection({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
  const [displayText, setDisplayText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = personalInfo.typingTitles;
    const current = titles[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.substring(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.substring(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 38);
      } else {
        setIsDeleting(false);
        setTitleIdx((i) => (i + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, titleIdx]);

  const floatingBadges = [
    { label: "React", pos: "top-4 right-0", delay: "animate-float-1" },
    { label: "Node.js", pos: "bottom-20 right-[-20px]", delay: "animate-float-2" },
    { label: "Python", pos: "top-24 left-[-30px]", delay: "animate-float-3" },
    { label: "Next.js", pos: "bottom-32 left-0", delay: "animate-float-4" },
  ];

  return (
    <div className="relative h-full flex flex-col">
      {/* Main hero content */}
      <div className="flex-1 flex items-center gap-8 px-14 pt-6 pb-16">
        {/* Left: Text */}
        <div className="flex-1 max-w-[560px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-violet-400 font-semibold text-lg tracking-widest mb-2 uppercase text-sm"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-black leading-none mb-4 gradient-text animate-gradient-shift"
            style={{ fontSize: "clamp(52px, 7vw, 84px)" }}
          >
            {personalInfo.name.split(" ")[0]}<br />
            <span className="text-white/90">{personalInfo.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-1 h-8 mb-3"
          >
            <span className="text-slate-300 font-medium text-lg">{displayText}</span>
            <span className="text-violet-400 text-xl font-light animate-blink">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-slate-500 text-sm mb-8 leading-relaxed max-w-[460px]"
          >
            B.Tech CSE @ IIIT Bhagalpur · CGPA 8.09 · Building scalable full-stack apps with MERN,Next.Js
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="px-7 py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
                boxShadow: "0 4px 20px rgba(139,92,246,0.35)",
              }}
            >
              View Projects
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-2xl font-semibold text-sm text-violet-300 border border-violet-500/40 transition-all duration-300 hover:bg-violet-500/10 hover:-translate-y-1"
              style={{ backdropFilter: "blur(8px)" }}
            >
              GitHub →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex gap-5"
          >
            {[
              { label: "1000+", sub: "Problems Solved" },
              { label: "10+", sub: "Projects Built" },
              { label: "8.09", sub: "CGPA" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black gradient-text">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Code Snippet Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full max-w-[400px] hidden lg:block"
        >
          {/* Background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur-xl opacity-20 animate-pulse-glow" />
          
          <div className="relative rounded-2xl overflow-hidden glass border border-violet-500/20"
            style={{ background: "rgba(10, 10, 26, 0.7)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
          >
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-slate-400 text-xs font-mono ml-2">developer.ts</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 text-sm font-mono leading-relaxed overflow-hidden">
              <div className="text-slate-400">
                <span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-blue-300">name:</span> <span className="text-green-300">'{personalInfo.name}'</span>,
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-blue-300">skills:</span> [
              </div>
              <div className="pl-8 text-slate-300">
                <span className="text-green-300">'React'</span>, <span className="text-green-300">'Next.js'</span>, <span className="text-green-300">'Node.js'</span>,
              </div>
              <div className="pl-8 text-slate-300">
                <span className="text-green-300">'Python'</span>, <span className="text-green-300">'Gen AI'</span>
              </div>
              <div className="pl-4 text-slate-300">],</div>
              <div className="pl-4 text-slate-300">
                <span className="text-blue-300">hardWorker:</span> <span className="text-orange-400">true</span>,
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-blue-300">problemSolver:</span> <span className="text-orange-400">true</span>
              </div>
              <div className="text-slate-400">{'}'};</div>
              <div className="mt-4 text-slate-400">
                <span className="text-violet-400">export default</span> <span className="text-cyan-300">developer</span>;
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-cyan-500/30 flex items-center gap-2 shadow-2xl"
            style={{ background: "rgba(6, 182, 212, 0.1)", backdropFilter: "blur(12px)" }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-300">Open to Work</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills marquee bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden flex items-center"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(139,92,246,0.1)",
        }}
      >
        <div className="animate-marquee flex gap-10 whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span key={i} className="text-slate-600 text-xs font-bold uppercase tracking-[3px]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
