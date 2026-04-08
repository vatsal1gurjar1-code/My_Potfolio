import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
};

export function ProjectCard({
  title,
  description,
  features,
  techStack,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Card className="h-full overflow-hidden">
        <CardHeader>
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-3 leading-7">{description}</CardDescription>
            </div>
            <span className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
