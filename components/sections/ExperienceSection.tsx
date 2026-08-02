"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Calendar, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <span className="text-violet-400 text-xs font-bold uppercase tracking-[4px]">03.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">Experience</h2>
        <p className="text-slate-500 text-sm mt-2">Professional work experience and internships</p>
      </motion.div>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5"
          style={{ background: "linear-gradient(to bottom,#8B5CF6,#06B6D4,transparent)" }} />

        {experience.map((exp, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
            className="relative mb-8"
          >
            {/* Dot */}
            <div className="absolute -left-8 top-6 w-4 h-4 rounded-full border-2 border-[#0a0a1a]"
              style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)", boxShadow: "0 0 12px rgba(139,92,246,0.6)" }} />

            <Card className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                  <h3 className="text-white font-bold text-xl mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-violet-300 font-semibold text-base">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1.5 text-slate-500 text-sm mb-1">
                    <Calendar size={13} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-5">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm">
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline"
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-cyan-300 border-cyan-500/20"
                      style={{ background: "rgba(6,182,212,0.08)" }}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
