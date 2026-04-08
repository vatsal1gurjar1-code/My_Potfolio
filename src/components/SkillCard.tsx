import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-sm text-foreground"
            >
              {skill}
            </span>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
