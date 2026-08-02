export const personalInfo = {
  name: "Rishabh Kumar",
  title: "Full Stack Developer",
  email: "rishabhgzp2004@gmail.com",
  phone: "+91-6392136569",
  github: "https://github.com/Rish6392",
  linkedin: "https://www.linkedin.com/in/rishabh-kumar-b98b55251/2/",
  leetcode: "https://leetcode.com/u/rish_6392/",
  codechef: "https://www.codechef.com/users/rish2004",
  codolio: "https://codolio.com/profile/king_steve",
  location: "Bhagalpur, Bihar",
  bio: "I am a passionate Full Stack Developer and Machine Learning enthusiast pursuing B.Tech in Computer Science and Engineering at IIIT Bhagalpur. I have hands-on experience building modern web applications using the MERN stack, Next.js, Generative AI, and related technologies.",
  bio2: "I have solved more than 1000 algorithmic challenges across platforms including LeetCode, CodeChef, Codeforces, and GeeksforGeeks. I actively contribute to open-source projects and continuously work on improving my technical skills.",
  typingTitles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "Open Source Contributor",
    "Problem Solver (1000+ DSA)",
  ],
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Bhagalpur",
    degree: "B.Tech in Computer Science and Engineering",
    grade: "CGPA: 8.09 / 10",
    duration: "September 2023 — June 2027",
    location: "Bhagalpur, Bihar",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Distributed Systems",
    ],
  },
];

export const experience = [
  {
    company: "Nayoda (Remote)",
    role: "Full-Stack Developer Intern",
    duration: "May 2026 — Present",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    points: [
      "Led the design and development of RESTful APIs supporting three user roles (Client, Freelancer, Admin) with JWT authentication, Google OAuth, and role-based authorization.",
      "Established real-time Socket.IO messaging with multiple event handlers for chat and project updates.",
      "Drove the integration of Razorpay and Stripe payment gateways with secure backend verification, webhook handling, and automated milestone-based payment tracking.",
    ],
  }
];

export const projects = [
  {
    title: "MediMeet",
    subtitle: "Telemedicine Platform",
    emoji: "🩺",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL"],
    description:
      "A full-stack telemedicine platform featuring role-specific dashboards, secure video consultations, and an AI symptom-analysis chatbot.",
    highlights: [
      "Pioneered a full-stack platform using Next.js 15 and Clerk RBAC with 5 PostgreSQL models.",
      "Guided the configuration of secure real-time video consultations using the Vonage Server SDK.",
      "Incorporated an AI symptom-analysis chatbot powered by Groq/LLaMA 3.3 70B.",
    ],
    github: "https://github.com/Rish6392/Medi-Meet",
    live: "https://medi-meet-flame.vercel.app",
    color: "from-violet-500 to-purple-700",
  },
  {
    title: "UpSkill Hub",
    subtitle: "Ed-Tech Platform",
    emoji: "📚",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A scalable full-stack ed-tech platform with three role-based dashboards, JWT authentication, and secure course enrollments.",
    highlights: [
      "Directed the engineering of a platform with 3 role-based dashboards, JWT, and OTP verification.",
      "Architected a modular REST API with 25+ endpoints across 11 controllers for course CRUD and payments.",
      "Embedded Razorpay Payment Gateway with HMAC-SHA256 signature verification.",
    ],
    github: "https://github.com/Rish6392/UpSkillHub",
    live: "https://up-skill-hub-gamma.vercel.app/",
    color: "from-cyan-500 to-blue-700",
  },
  {
    title: "Realtime-AI-GYM Trainer",
    subtitle: "AI Fitness Coach",
    emoji: "🏋️",
    tech: ["Python", "MediaPipe", "OpenCV", "WebRTC", "Groq LLM", "SQLite"],
    description:
      "An AI real-time gym coach using pose detection for automatic rep counting and real-time audio feedback via LLM.",
    highlights: [
      "Led the creation of an AI real-time gym coach using MediaPipe and OpenCV for pose detection.",
      "Leveraged Groq LLM for AI voice coaching with real-time workout feedback and gTTS.",
      "Initiated live webcam streaming using Streamlit-WebRTC with real-time pose overlay.",
    ],
    github: "https://github.com/Rish6392/Realtime-Ai-Gym-Trainer",
    live: "#",
    color: "from-emerald-500 to-teal-700",
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "Bit by Bit Hackathon — Rank 7",
    description: "Secured Rank 7 among 100+ teams (500+ participants) nationwide, demonstrating competitive coding and teamwork skills.",
    tag: "Hackathon",
    link: "https://drive.google.com/file/d/1tfTTXlnwkCI66AIqbGgRwVqxAEZ2Njw4/view?usp=drivesdk",
  },
  {
    icon: "🚀",
    title: "Smart India Hackathon 2025 — Rank 13",
    description: "Secured Rank 13 among 60+ teams (300+ participants) in the internal hackathon.",
    tag: "Hackathon",
    link: "https://drive.google.com/file/d/1lnFeSzjwCIvbAbPEJlATPdrPmwYPsydV/view?usp=drivesdk",
  },
  {
    icon: "🌟",
    title: "Hacktoberfest '25 Super Contributor",
    description: "6 Merged PRs — also contributed to GSSOC '24 repositories.",
    tag: "Open Source",
  },
  {
    icon: "⭐",
    title: "CodeChef 3-Star Coder",
    description: "Max Rating 1610 — ranked in the top 20% globally among active users.",
    tag: "Competitive",
  },
  {
    icon: "💡",
    title: "LeetCode Max Rating 1596",
    description: "500+ DSA problems solved, highlighting consistency in algorithm design.",
    tag: "DSA",
  },
  {
    icon: "💻",
    title: "Competitive Programming",
    description: "Solved 1000+ algorithmic challenges across platforms (CodeChef, LeetCode, Codeforces, GfG).",
    tag: "Problem Solving",
  },
] as { icon: string; title: string; description: string; tag: string; link?: string }[];

export const leadership = [
  {
    org: "Adhyaay, IIIT Bhagalpur",
    role: "Mentor",
    duration: "August 2024 — Present",
    location: "Bhagalpur, Bihar",
    points: [
      "Mentored 20+ students in Data Structures & Algorithms, improving batch placement readiness by 30% through structured learning paths.",
      "Facilitated technical workshops on Database Schema Design and REST API security, enhancing development efficiency of student projects.",
    ],
  },
];

export const skills = {
  languages: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  webDev: ["React", "Next.js", "Node", "Express", "Prisma", "Tailwind"],
  backendDb: ["RESTful APIs", "Microservices", "System Design", "OOP", "DBMS"],
  cloudTools: ["Git", "Docker", "AWS (EC2, S3)", "Vercel", "Postman", "Render", "WebRTC", "OpenCV", "MediaPipe", "Groq LLM", "Generative AI"],
};

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "1000+", label: "Problems Solved" },
  { value: "700+", label: "GitHub Contributions" },
  { value: "8.09", label: "CGPA" },
];

export const marqueeSkills = [
  "React", "Next.js", "Node", "TypeScript", "Python",
  "C++", "Prisma", "Express", "Docker", "Tailwind",
  "RESTful APIs", "Git", "AWS", "WebRTC", "Generative AI"
];
