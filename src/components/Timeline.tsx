import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export type TimelineItem = {
  title: string;
  company: string;
  duration: string;
  points: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent sm:before:left-1/2">
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${item.company}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative sm:grid sm:grid-cols-2 sm:gap-10"
        >
          <div className="mb-4 pl-14 sm:mb-0 sm:pl-0 sm:pr-10 sm:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {item.duration}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.company}</p>
          </div>

          <span className="absolute left-[13px] top-3 h-4 w-4 rounded-full border-4 border-background bg-primary sm:left-1/2 sm:-translate-x-1/2" />

          <Card className="ml-14 sm:ml-0">
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
