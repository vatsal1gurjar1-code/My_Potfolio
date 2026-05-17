import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, Download, FileText, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
// @ts-ignore
import ITResumeUrl from "@/Resume/Vatsal_Gurjar_Resume_IT_LLT.docx";
// @ts-ignore
import StartupResumeUrl from "@/Resume/Vatsal_Gurjar_Resume_Startup.docx";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const currentBuilds = [
  "AI automation pipelines using LangChain and OpenAI APIs",
  "Enterprise reporting systems using React and FastAPI",
  "Workflow automation using n8n",
];

const metrics = [
  { value: "4+", label: "Production systems delivered" },
  { value: "React + FastAPI", label: "Primary application stack" },
  { value: "Vadodara", label: "Shipping from Gujarat, India" },
];

export function Home() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs text-primary md:block"
          >
            <Sparkles className="mr-2 inline h-3.5 w-3.5" />
            Full Stack Software Engineer
          </motion.div>

          <Badge className="mb-6">Available for high-impact software roles</Badge>
          <div className="relative inline-block">
            <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Vatsal K. <span className="text-gradient">Gurjar</span>
            </h1>
            {/* Animated Glowing Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 h-[3px] w-[80%] origin-left rounded-full bg-gradient-to-r from-primary via-accent to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 h-[4px] w-[80%] origin-left rounded-full bg-gradient-to-r from-primary via-accent to-transparent blur-md"
            />
          </div>
          <p className="mt-6 max-w-2xl text-xl font-medium text-foreground/90">
            Building scalable web systems, AI automation pipelines, and intelligent software platforms.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Full-stack Software Engineer and AI/ML Automation Engineer with hands-on production
            experience building SaaS platforms, AI automation pipelines, and role-based enterprise
            systems. Currently working at Rang Digitech LLC building enterprise software and AI
            automation systems.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Vadodara, Gujarat, India
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/projects" className={buttonVariants({ size: "lg" })}>
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setShowResumeOptions(true)}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>

            <AnimatePresence>
              {showResumeOptions && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                  {/* Backdrop overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setShowResumeOptions(false)}
                    className="absolute inset-0 bg-background/85 backdrop-blur-sm"
                  />

                  {/* Modal Panel */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-secondary/95 p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="mb-6 text-center">
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">Select Resume Version</h3>
                      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                        Choose the resume tailored for your specific target role profile.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href={ITResumeUrl}
                        download="Vatsal_Gurjar_Resume_IT_LLT.docx"
                        onClick={() => setShowResumeOptions(false)}
                        className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 transition hover:border-primary/30 hover:bg-background/80"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold text-foreground sm:text-base">IT Corporate Role</span>
                          <span className="mt-0.5 text-xs text-muted-foreground">Standard formatted professional DOCX</span>
                        </div>
                      </a>

                      <a
                        href={StartupResumeUrl}
                        download="Vatsal_Gurjar_Resume_Startup.docx"
                        onClick={() => setShowResumeOptions(false)}
                        className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-background/50 p-4 transition hover:border-accent/30 hover:bg-background/80"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold text-foreground sm:text-base">Startup / Growth Role</span>
                          <span className="mt-0.5 text-xs text-muted-foreground">High-impact execution & metrics DOCX</span>
                        </div>
                      </a>
                    </div>

                    <button
                      onClick={() => setShowResumeOptions(false)}
                      className="mt-5 w-full rounded-xl py-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
                    >
                      Cancel
                    </button>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
            <Link to="/contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-3xl" />
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_30%)]" />
            <CardContent className="relative p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-black/10 p-5">
                    <p className="font-display text-2xl font-bold">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-background/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Currently Building
                </p>
                <div className="mt-5 space-y-4">
                  {currentBuilds.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="rounded-2xl border border-white/10 bg-secondary/30 p-4 text-sm text-muted-foreground"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
