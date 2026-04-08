import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C", "R"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Zustand", "React Hook Form", "Recharts", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "SQLAlchemy", "Pydantic", "PostgreSQL", "Node.js", "REST APIs"],
  },
  {
    title: "AI & Tools",
    skills: ["LangChain", "n8n", "OpenAI APIs", "OpenCV", "Git", "JWT Authentication", "Axios"],
  },
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Skills</p>
        <h1 className="section-title mt-4">A stack built for modern product engineering.</h1>
        <p className="section-copy mt-4">
          Strong across frontend systems, backend APIs, automation tooling, and AI-assisted
          product workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </motion.section>
  );
}
