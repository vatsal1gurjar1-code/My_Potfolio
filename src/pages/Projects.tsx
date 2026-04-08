import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Silence Sense",
    description:
      "Communication system designed for speech and hearing impaired individuals.",
    features: [
      "Gesture recognition using OpenCV",
      "Speech to text",
      "Text to speech",
      "Multilingual translation",
      "Python Tkinter interface",
    ],
    techStack: ["Python", "OpenCV", "Tkinter", "Speech Processing", "Translation APIs"],
  },
  {
    title: "Cloverse",
    description: "AI powered collaborative learning platform.",
    features: [
      "Real time chat",
      "Video conferencing",
      "Collaborative document editing",
      "AI note summarization",
      "AI quiz generation",
      "AI performance feedback",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "OpenAI APIs", "Auth0"],
  },
  {
    title: "LinkedIn Outreach Automation Platform",
    description:
      "A platform designed to streamline LinkedIn lead generation and outreach workflows for sales teams.",
    features: [
      "Automated connection requests and follow-ups",
      "Campaign-based outreach automation",
      "Lead tracking and campaign analytics",
      "Message sequence workflows",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "n8n"],
  },
];

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Projects</p>
        <h1 className="section-title mt-4">Selected product and automation work.</h1>
        <p className="section-copy mt-4">
          A mix of accessibility-focused applications, AI-enabled collaboration systems, and
          workflow platforms built for business outcomes.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
