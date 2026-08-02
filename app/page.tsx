"use client";
import { useState } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";
import Sidebar, { type SectionId } from "@/components/Sidebar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";

export default function PortfolioPage() {
  const [active, setActive] = useState<SectionId>("home");

  const sections: Record<SectionId, React.ReactNode> = {
    home: <HomeSection onNavigate={setActive} />,
    about: <AboutSection />,
    education: <EducationSection />,
    experience: <ExperienceSection />,
    achievements: <AchievementsSection />,
    projects: <ProjectsSection />,
    leadership: <LeadershipSection />,
  };

  return (
    <div className="relative h-screen overflow-hidden" style={{ background: "#0a0a1a" }}>
      {/* Particle background */}
      <ParticleCanvas />

      {/* Background decorative blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent)" }} />
        <div className="absolute bottom-[-5%] left-[20%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle,#06B6D4,transparent)" }} />
        <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle,#8B5CF6,transparent)" }} />
      </div>

      {/* Sidebar */}
      <Sidebar active={active} onSelect={setActive} />

      {/* Main content */}
      <main className="relative z-10 h-screen overflow-hidden" style={{ marginLeft: "76px" }}>
        {(Object.entries(sections) as [SectionId, React.ReactNode][]).map(([id, content]) => (
          <div
            key={id}
            className={`absolute inset-0 transition-all duration-500 ${
              active === id
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            {active === id && content}
          </div>
        ))}
      </main>
    </div>
  );
}
