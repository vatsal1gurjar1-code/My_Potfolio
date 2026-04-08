import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "@/components/ResumePDF";
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
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Vatsal K. <span className="text-gradient">Gurjar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium text-foreground/90">
            Building scalable web systems, AI automation pipelines, and intelligent software platforms.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Full stack engineer experienced in building production-grade systems using React, FastAPI,
            TypeScript, and PostgreSQL. Currently working at Rang Digitech LLC building enterprise
            software and AI automation systems.
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
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Vatsal_K_Gurjar_Resume.pdf"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              style={{ textDecoration: "none" }}
            >
              {({ loading }) => (
                <>
                  <Download className="h-4 w-4" />
                  {loading ? "Preparing..." : "Download Resume"}
                </>
              )}
            </PDFDownloadLink>
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
