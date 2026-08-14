"use client";
import { motion } from "framer-motion";
import { leadership } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function LeadershipSection() {
  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <span className="text-red-400 text-xs font-bold uppercase tracking-[4px]">06.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">Leadership</h2>
        <p className="text-slate-500 text-sm mt-2">Mentorship, community, and impact</p>
      </motion.div>

      {leadership.map((role, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
          className="mb-6"
        >
          <Card className="glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="text-white font-bold text-xl">{role.org}</h3>
                  <p className="text-red-400 font-semibold text-base">{role.role}</p>
                </div>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-1.5 text-slate-500 text-sm">
                <Calendar size={13} />
                <span>{role.duration}</span>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-slate-500 text-sm">
                <MapPin size={13} />
                <span>{role.location}</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {role.points.map((point, j) => (
              <li key={j} className="flex gap-3 text-slate-400 text-sm">
                <span className="text-red-400 mt-0.5 flex-shrink-0">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <Card className="glass rounded-xl p-4 text-center border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="text-3xl font-black gradient-text animate-gradient-shift">20+</div>
                <div className="text-slate-500 text-xs mt-1">Students Mentored</div>
              </CardContent>
            </Card>
            <Card className="glass rounded-xl p-4 text-center border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="text-3xl font-black gradient-text animate-gradient-shift">30%</div>
                <div className="text-slate-500 text-xs mt-1">Placement Improvement</div>
              </CardContent>
            </Card>
          </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Contact/connect card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      >
        <Card className="glass rounded-2xl p-6 text-center shadow-none"
          style={{ background: "rgba(220,38,38,0.05)", borderColor: "rgba(220,38,38,0.2)" }}>
          <CardContent className="p-0">
        <h3 className="text-white font-bold text-lg mb-2">Let&apos;s Connect!</h3>
        <p className="text-slate-400 text-sm mb-4">
          Open for Full Stack Developer Internships & Collaborations
        </p>
        <a
          href="mailto:rishabhgzp2004@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
          style={{ background: "linear-gradient(135deg,#DC2626,#1E40AF)", boxShadow: "0 4px 16px rgba(220,38,38,0.25)" }}
        >
          ✉ rishabhgzp2004@gmail.com
        </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
