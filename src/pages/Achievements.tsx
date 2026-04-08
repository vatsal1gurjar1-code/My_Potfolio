import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    title: "GTU Code Unnati Innovation Marathon",
    description: "Top 25 nationwide finish among 600+ teams.",
    icon: Trophy,
  },
  {
    title: "Line Follower Race 2023",
    description: "Gold Medalist.",
    icon: Medal,
  },
  {
    title: "Table Tennis College Sports Fest",
    description: "Gold Medalist for three consecutive wins.",
    icon: Award,
  },
];

export function Achievements() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Achievements</p>
        <h1 className="section-title mt-4">Recognition in engineering and competition settings.</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">
                  {achievement.description}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
