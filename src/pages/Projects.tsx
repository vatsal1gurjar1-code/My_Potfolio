import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

export const projects = [
  {
    slug: "silence-sense",
    title: "Silence Sense",
    description: "A multimodal communication system integrating gesture recognition and real-time translation for the speech and hearing impaired.",
    longDescription: "Silence Sense is a groundbreaking communication tool designed to bridge the gap between the hearing impaired and the general public. By utilizing MediaPipe and OpenCV, it achieves 84% accuracy in recognizing complex hand gestures and translating them into spoken language in real-time. The system also features reverse translation (speech-to-text) and supports multiple languages via Google APIs.",
    features: [
      "Gesture recognition (84% accuracy) using OpenCV and Mediapipe",
      "Real-time speech-to-text and text-to-speech integration",
      "Multilingual translation via Google APIs",
      "Top 10 Finalist at GTU Code Unnati Innovation Marathon",
    ],
    tech: ["Python", "OpenCV", "Mediapipe", "Tkinter", "Google APIs"],
    heroImage: "/projects/silent-sense-hero.png",
    resources: {
      report: "/projects/silent-sense-report.pdf",
      ppt: "/projects/silent-sense-presentation.pptx",
      logo: "/projects/silent-sense-logo.png"
    }
  },
  {
    slug: "cloverse",
    title: "Cloverse",
    description: "AI-powered collaborative learning platform for distributed student teams.",
    longDescription: "Cloverse is a comprehensive ecosystem for modern students. It combines real-time video conferencing (WebRTC) with AI-driven document summarization and automatic quiz generation. Built with a full MERN stack and Auth0 for security, it empowers teams to collaborate more effectively across borders.",
    features: [
      "Real-time chat and video conferencing (WebRTC)",
      "Collaborative document editing and AI note summarization",
      "AI-driven quiz generation and performance feedback",
      "Secure cross-platform authentication using Auth0",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "OpenAI APIs", "Auth0"],
    heroImage: "/projects/cloverse-hero.png",
    resources: {
      ppt: "/projects/cloverse-presentation.pptx"
    }
  },
  {
    slug: "s-mart",
    title: "S-mart",
    description: "Personalized grocery recommendation engine optimized for user dietary patterns.",
    longDescription: "S-mart leverages machine learning to transform the grocery shopping experience. By analyzing past purchase history and user-defined dietary goals, it provides highly accurate item recommendations. The system uses scikit-learn for collaborative filtering, ensuring users discover healthy alternatives that match their lifestyle.",
    features: [
      "Collaborative filtering using scikit-learn",
      "Analyzing user preferences and dietary patterns",
      "Optimized grocery selection workflows",
    ],
    tech: ["Python", "scikit-learn", "NumPy", "Pandas"],
    heroImage: "/projects/smart-hero.png"
  },
  {
    slug: "linkedin-outreach",
    title: "LinkedIn Outreach Platform",
    description: "Enterprise platform to streamline lead generation and outreach workflows.",
    longDescription: "This platform automates the tedious parts of LinkedIn networking. It features automated connection requests, personalized follow-up sequences, and an integrated analytics dashboard to track campaign performance. Built for scalability, it handles complex outreach logic while maintaining a human-centric approach.",
    features: [
      "Automated connection requests and follow-ups",
      "Campaign-based outreach and message sequencing",
      "Integrated analytics dashboard for performance tracking",
    ],
    tech: ["Node.js", "Puppeteer", "PostgreSQL", "React"],
    heroImage: "/projects/linkedin-hero.png"
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
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
          Projects
        </p>
        <h1 className="section-title mt-4">Selected product and automation work.</h1>
        <p className="section-copy mt-4">
          A mix of accessibility-focused applications, AI-enabled collaboration systems, and
          workflow platforms built for business outcomes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
