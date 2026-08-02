"use client";
import { Home, User, GraduationCap, Trophy, Code2, Star, Mail, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

export type SectionId = "home" | "about" | "education" | "experience" | "achievements" | "projects" | "leadership";

const navItems: { id: SectionId; icon: React.ReactNode; label: string }[] = [
  { id: "home", icon: <Home size={20} />, label: "Home" },
  { id: "about", icon: <User size={20} />, label: "About Me" },
  { id: "education", icon: <GraduationCap size={20} />, label: "Education" },
  { id: "experience", icon: <Briefcase size={20} />, label: "Experience" },
  { id: "achievements", icon: <Trophy size={20} />, label: "Achievements" },
  { id: "projects", icon: <Code2 size={20} />, label: "Projects" },
  { id: "leadership", icon: <Star size={20} />, label: "Leadership" },
];

interface SidebarProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[76px] z-50 flex flex-col items-center py-6 gap-2"
      style={{
        background: "rgba(8,8,24,0.88)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(139,92,246,0.15)",
      }}>
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-7 text-white font-black text-lg animate-pulse-glow"
        style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)" }}>
        R
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            title={item.label}
            className={cn(
              "group relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer border",
              active === item.id
                ? "text-white border-violet-500/40"
                : "text-slate-500 border-transparent hover:text-violet-300 hover:border-violet-500/20"
            )}
            style={
              active === item.id
                ? {
                    background: "rgba(139,92,246,0.18)",
                    boxShadow: "0 0 18px rgba(139,92,246,0.35), inset 0 0 14px rgba(139,92,246,0.06)",
                  }
                : { background: "transparent" }
            }
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute left-[58px] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:left-[62px]"
              style={{
                background: "#1a1a3e",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#e2e8f0",
              }}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Social Links */}
      <div className="flex flex-col gap-2 mt-auto">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
          title="GitHub"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-300 transition-colors duration-200 hover:bg-violet-500/10">
          <FaGithub size={17} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
          title="LinkedIn"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-300 transition-colors duration-200 hover:bg-cyan-500/10">
          <FaLinkedin size={17} />
        </a>
        <a href={`mailto:${personalInfo.email}`}
          title="Email"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-300 transition-colors duration-200 hover:bg-violet-500/10">
          <Mail size={17} />
        </a>
      </div>
    </aside>
  );
}
