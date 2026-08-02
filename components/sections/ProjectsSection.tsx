"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <span className="text-violet-400 text-xs font-bold uppercase tracking-[4px]">05.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">Projects</h2>
        <p className="text-slate-500 text-sm mt-2">Full-stack applications built with modern technologies</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-5">
        {projects.map((proj, i) => (
          <motion.div key={proj.title}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
            style={{ "--hover-shadow": "0 20px 50px rgba(139,92,246,0.15)" } as React.CSSProperties}
          >
            <Card className="glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-0 bg-transparent shadow-none h-full">
              <CardContent className="p-0 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-3xl">{proj.emoji}</span>
                <div className="mt-2">
                  <h3 className="text-white font-bold text-lg leading-tight">{proj.title}</h3>
                  <p className="text-violet-400 text-xs font-semibold mt-0.5">{proj.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-1">
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-violet-300 transition-colors"
                  style={{ background: "rgba(139,92,246,0.08)" }}>
                  <FaGithub size={15} />
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-300 transition-colors"
                  style={{ background: "rgba(6,182,212,0.08)" }}>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{proj.description}</p>

            {/* Highlights */}
            <ul className="mb-4 space-y-1.5">
              {proj.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2 text-xs text-slate-500">
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-violet-500/10 mt-auto">
              {proj.tech.map((t) => (
                <Badge key={t} variant="outline"
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-violet-300 border-violet-500/20"
                  style={{ background: "rgba(139,92,246,0.1)" }}>
                  {t}
                </Badge>
              ))}
            </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
