"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, marqueeSkills } from "@/lib/data";
import type { SectionId } from "@/components/Sidebar";

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

  return (
    <div className="relative h-full flex flex-col overflow-hidden">

      {/* ── Portrait Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/portfolio_image_hp.png"
          alt={personalInfo.name}
          className="absolute right-0 bottom-0 h-full object-cover object-top select-none pointer-events-none"
          style={{
            width: "55%",
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 30%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 30%, transparent 90%)",
          }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, #0a0a1a 38%, rgba(10,10,26,0.55) 65%, rgba(10,10,26,0.3) 100%)",
          }}
        />
      </div>

      {/* ── Sideways Vertical Text — Left Edge ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-[5px] text-slate-500"
          style={{ letterSpacing: "5px" }}
        >
          Full Stack Developer
        </span>
      </motion.div>

      {/* ── Sideways Vertical Text — Right Edge ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg) translateY(50%)",
        }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-[5px] text-slate-600"
          style={{ letterSpacing: "5px" }}
        >
          IIIT Bhagalpur &bull; B.Tech CSE
        </span>
      </motion.div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-center px-16 pt-6 pb-20">
        <div className="max-w-[600px]">

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex gap-10 mb-10"
          >
            {[
              { value: "+1000", label: "Problems Solved" },
              { value: "+10", label: "Projects Built" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white tracking-tight">{s.value}</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Big Hero Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <h1
              className="font-black leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(64px, 9vw, 120px)" }}
            >
              <span className="gradient-text animate-gradient-shift">
                {personalInfo.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-white/90">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>
          </motion.div>

          {/* Divider + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center gap-4"
          >
            <div className="w-10 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
            <div className="flex items-center gap-1 h-7">
              <span className="text-slate-300 font-medium text-base">{displayText}</span>
              <span className="text-violet-400 text-lg font-light animate-blink">|</span>
            </div>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 text-sm mt-5 leading-relaxed max-w-[440px]"
          >
            B.Tech CSE @ IIIT Bhagalpur · CGPA 8.09 · Building scalable
            full-stack applications with MERN, Next.js &amp; Generative AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mt-8"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="px-8 py-3.5 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#8B5CF6,#06B6D4)",
                boxShadow: "0 4px 24px rgba(139,92,246,0.35)",
              }}
            >
              View Projects
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl font-semibold text-sm text-violet-300 border border-violet-500/40 transition-all duration-300 hover:bg-violet-500/10 hover:-translate-y-1"
            >
              GitHub →
            </a>
          </motion.div>

          {/* Open-to-work badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/20"
            style={{ background: "rgba(6, 182, 212, 0.06)" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold text-cyan-300 tracking-wide">Open to Work</span>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Stats Bar (replaces marquee) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        {/* Skills marquee */}
        <div
          className="h-12 overflow-hidden flex items-center"
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
      </motion.div>
    </div>
  );
}
