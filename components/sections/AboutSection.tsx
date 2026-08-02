"use client";
import { motion } from "framer-motion";
import { personalInfo, stats, skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45 },
});

export default function AboutSection() {
  const skillGroups = [
    { label: "Languages", items: skills.languages },
    { label: "Web Dev", items: skills.webDev },
    { label: "Backend & DB", items: skills.backendDb },
    { label: "Cloud & Tools", items: skills.cloudTools },
  ];

  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div {...fadeUp(0.05)} className="mb-6">
        <span className="text-violet-400 text-xs font-bold uppercase tracking-[4px]">01.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">About Me</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <motion.div {...fadeUp(0.1)}>
          <Card className="glass rounded-2xl p-6 transition-all duration-300 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <h3 className="text-violet-300 font-bold text-base mb-3">Who I Am</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.bio}</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fadeUp(0.2)}>
          <Card className="glass rounded-2xl p-6 transition-all duration-300 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <h3 className="text-cyan-300 font-bold text-base mb-3">What I Do</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.bio2}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div {...fadeUp(0.3)} className="grid grid-cols-4 gap-4 mb-5">
        {stats.map((s) => (
          <Card key={s.label} className="glass rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="text-3xl font-black gradient-text animate-gradient-shift">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1 font-medium">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div {...fadeUp(0.4)}>
        <Card className="glass rounded-2xl p-6 transition-all duration-300 border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <h3 className="text-violet-300 font-bold text-sm mb-4 uppercase tracking-wider">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wider">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline"
                        className="rounded-lg text-xs font-semibold text-violet-300 border-violet-500/20 px-2.5 py-1"
                        style={{ background: "rgba(139,92,246,0.08)" }}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
