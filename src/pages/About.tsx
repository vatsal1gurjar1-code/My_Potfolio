import { motion } from "framer-motion";
import { BriefcaseBusiness, Cpu, Database, Layers3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const focusAreas = [
  {
    title: "Enterprise Engineering",
    icon: BriefcaseBusiness,
    copy: "Building enterprise-grade reporting systems, approval workflows, and analytics-heavy interfaces for production teams.",
  },
  {
    title: "Modern Full Stack",
    icon: Layers3,
    copy: "Delivering React and FastAPI systems with strong type safety, clean API design, and maintainable frontend architecture.",
  },
  {
    title: "Data Systems",
    icon: Database,
    copy: "Designing application flows backed by PostgreSQL, efficient schemas, and operational reporting requirements.",
  },
  {
    title: "AI Automation",
    icon: Cpu,
    copy: "Connecting LangChain, OpenAI APIs, and workflow tools to reduce repetitive work and accelerate internal operations.",
  },
];

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">About</p>
          <h1 className="section-title mt-4">Engineering products with scale, clarity, and automation in mind.</h1>
        </div>
        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            Vatsal Gurjar is a full stack software engineer working at Rang Digitech LLC where he
            develops enterprise-grade systems and AI automation pipelines.
          </p>
          <p>
            He specializes in modern web development using React, FastAPI, TypeScript, and
            PostgreSQL. His work focuses on building scalable applications, automation workflows,
            and intelligent software systems.
          </p>
          <p>
            His current portfolio of work sits at the intersection of frontend architecture,
            backend reliability, operational analytics, and AI-driven workflow automation.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">
                  {area.copy}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
