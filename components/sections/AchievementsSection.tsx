"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AchievementsSection() {
  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <span className="text-red-400 text-xs font-bold uppercase tracking-[4px]">04.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">Achievements</h2>
        <p className="text-slate-500 text-sm mt-2">Competitions, open source, and competitive programming</p>
      </motion.div>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5"
          style={{ background: "linear-gradient(to bottom,#DC2626,#1E40AF,transparent)" }} />

        {achievements.map((a, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
            className="relative mb-5"
          >
            {/* Dot */}
            <div className="absolute -left-8 top-5 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
              style={{ background: "rgba(220,38,38,0.15)", border: "1.5px solid rgba(220,38,38,0.45)", boxShadow: "0 0 8px rgba(220,38,38,0.25)" }}>
            </div>

            <Card className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 border-0 bg-transparent shadow-none">
              <CardContent className="p-0 flex items-start gap-5">
                <span className="text-3xl flex-shrink-0 mt-0.5">{a.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    {a.title}
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </h3>
                  <Badge variant="outline" className="px-2.5 py-0.5 rounded-full text-xs font-bold flex-shrink-0 border-red-500/25 text-red-400"
                    style={{ background: "rgba(220,38,38,0.12)" }}>
                    {a.tag}
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
              </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
