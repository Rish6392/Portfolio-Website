"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <div className="h-full overflow-y-auto px-14 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
        <span className="text-red-400 text-xs font-bold uppercase tracking-[4px]">02.</span>
        <h2 className="text-3xl font-black gradient-text inline ml-2">Education</h2>
      </motion.div>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5"
          style={{ background: "linear-gradient(to bottom,#DC2626,#1E40AF)" }} />

        {education.map((edu, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
            className="relative mb-8"
          >
            {/* Dot */}
            <div className="absolute -left-8 top-6 w-4 h-4 rounded-full border-2 border-[#050510]"
              style={{ background: "linear-gradient(135deg,#DC2626,#1E40AF)", boxShadow: "0 0 12px rgba(220,38,38,0.5)" }} />

            <Card className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                  <h3 className="text-white font-bold text-xl mb-1">{edu.institution}</h3>
                  <p className="text-red-300 font-semibold text-base">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-1">
                    <Calendar size={13} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border-red-500/30 text-red-300"
                style={{ background: "rgba(220,38,38,0.12)" }}>
                🎯 {edu.grade}
              </Badge>

              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <Badge key={c} variant="outline"
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-blue-300 border-blue-500/20"
                      style={{ background: "rgba(59,130,246,0.08)" }}>
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Future placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -left-8 top-4 w-4 h-4 rounded-full border-2 border-red-500/30"
            style={{ background: "rgba(220,38,38,0.1)" }} />
          <Card className="glass rounded-2xl p-5 border-dashed opacity-50 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <p className="text-slate-500 text-sm font-medium text-center">🚀 More to come...</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
