import { motion } from "framer-motion";
import { Timeline, type TimelineItem } from "@/components/Timeline";

const experienceItems: TimelineItem[] = [
  {
    title: "Junior Software Engineer",
    company: "Rang Digitech LLC",
    duration: "Jan 2026 - Present",
    points: [
      "Built a full-stack Daily Reporting System using React, FastAPI, and PostgreSQL.",
      "Implemented role-based approval workflows.",
      "Built KRA analytics dashboards.",
      "Developed dynamic template engine.",
      "Implemented JWT authentication and REST APIs.",
    ],
  },
  {
    title: "AI Automation Engineer (Intern)",
    company: "Rang Digitech LLC",
    duration: "Sep 2025 - Dec 2025",
    points: [
      "Built automation pipelines using n8n, LangChain, and OpenAI APIs.",
      "Integrated automation systems with FastAPI backend.",
      "Reduced manual reporting through automation workflows.",
    ],
  },
  {
    title: "Web Management Head",
    company: "Hexsociety",
    duration: "Mar 2023 - Oct 2024",
    points: [
      "Led development of community platform.",
      "Managed backend infrastructure.",
      "Handled technology for multiple events.",
    ],
  },
  {
    title: "Software Developer",
    company: "MSK Solutions",
    duration: "Feb 2024 - Apr 2024",
    points: [
      "Built multimodal translation system using OpenCV.",
      "Integrated speech-to-text and text-to-speech.",
      "Used Google APIs for translation.",
    ],
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Experience</p>
        <h1 className="section-title mt-4">Career timeline across software and automation roles.</h1>
      </div>
      <Timeline items={experienceItems} />
    </motion.section>
  );
}
