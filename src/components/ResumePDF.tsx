import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const BLUE = "#2563eb";
const DARK = "#0f172a";
const MUTED = "#475569";
const LIGHT_BG = "#f1f5f9";
const BORDER = "#e2e8f0";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: DARK,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    backgroundColor: "#ffffff",
  },

  // ── Header ──────────────────────────────────────────────────────
  header: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: BLUE,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    letterSpacing: 0.5,
  },
  nameAccent: {
    color: BLUE,
  },
  title: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    marginTop: 3,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 7,
  },
  contactItem: {
    fontSize: 8.5,
    color: MUTED,
  },

  // ── Two-column layout ───────────────────────────────────────────
  body: {
    flexDirection: "row",
    gap: 18,
    flex: 1,
  },
  leftCol: {
    width: "35%",
    gap: 14,
  },
  rightCol: {
    flex: 1,
    gap: 14,
  },

  // ── Section ─────────────────────────────────────────────────────
  section: {
    gap: 6,
  },
  sectionLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },

  // ── Summary ─────────────────────────────────────────────────────
  summary: {
    fontSize: 8.5,
    color: MUTED,
    lineHeight: 1.6,
  },

  // ── Skills ──────────────────────────────────────────────────────
  skillGroup: {
    marginBottom: 5,
  },
  skillGroupTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 3,
  },
  skillPills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  pill: {
    backgroundColor: LIGHT_BG,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7.5,
    color: DARK,
  },

  // ── Experience / Education entries ──────────────────────────────
  entry: {
    marginBottom: 8,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  entryTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    flex: 1,
  },
  // Education-specific title (no flex:1 since it's not in a row)
  eduTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  entryDuration: {
    fontSize: 7.5,
    color: MUTED,
    textAlign: "right",
  },
  entryCompany: {
    fontSize: 8.5,
    color: BLUE,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 2,
  },
  bulletDot: {
    fontSize: 8.5,
    color: BLUE,
    marginTop: 0.5,
  },
  bulletText: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.5,
    flex: 1,
  },

  // ── Projects ────────────────────────────────────────────────────
  projectEntry: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  techChip: {
    backgroundColor: "#dbeafe",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7,
    color: BLUE,
  },

  // ── Achievements ────────────────────────────────────────────────
  achieveEntry: {
    marginBottom: 5,
  },
  achieveTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  achieveDesc: {
    fontSize: 8,
    color: MUTED,
    marginTop: 1,
  },
});

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return <Text style={styles.sectionLabel}>{label}</Text>;
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>›</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

// ── Document ─────────────────────────────────────────────────────────────────

export function ResumePDF() {
  return (
    <Document
      title="Vatsal K. Gurjar – Resume"
      author="Vatsal K. Gurjar"
      subject="Full Stack Software Engineer"
    >
      <Page size="A4" style={styles.page}>
        {/* ── HEADER ── */}
        <View style={styles.header}>
          <Text style={styles.name}>
            Vatsal K. <Text style={styles.nameAccent}>Gurjar</Text>
          </Text>
          <Text style={styles.title}>Full Stack Software Engineer</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Location: Vadodara, Gujarat, India</Text>
            <Text style={styles.contactItem}>Email: vatsalgurjar.dev@gmail.com</Text>
            <Text style={styles.contactItem}>Web: vatsal.dev</Text>
          </View>
        </View>

        {/* ── BODY ── */}
        <View style={styles.body}>
          {/* ── LEFT COLUMN ── */}
          <View style={styles.leftCol}>
            {/* Summary */}
            <View style={styles.section}>
              <SectionLabel label="Summary" />
              <Text style={styles.summary}>
                Full stack software engineer specializing in React, FastAPI, TypeScript, and
                PostgreSQL. Builds enterprise-grade systems, AI automation pipelines, and
                scalable web platforms. Currently working at Rang Digitech LLC delivering
                production-grade software and intelligent automation systems.
              </Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <SectionLabel label="Skills" />
              {[
                {
                  title: "Languages",
                  skills: ["Python", "TypeScript", "JavaScript", "C", "R"],
                },
                {
                  title: "Frontend",
                  skills: ["React", "Vite", "Tailwind CSS", "Zustand", "Recharts", "shadcn/ui"],
                },
                {
                  title: "Backend",
                  skills: ["FastAPI", "SQLAlchemy", "Pydantic", "PostgreSQL", "Node.js", "REST APIs"],
                },
                {
                  title: "AI & Tools",
                  skills: ["LangChain", "n8n", "OpenAI APIs", "OpenCV", "Git", "JWT Auth"],
                },
              ].map((group) => (
                <View key={group.title} style={styles.skillGroup}>
                  <Text style={styles.skillGroupTitle}>{group.title}</Text>
                  <View style={styles.skillPills}>
                    {group.skills.map((s) => (
                      <Text key={s} style={styles.pill}>{s}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <SectionLabel label="Education" />
              <View style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.eduTitle}>B.Tech, Computer Engineering</Text>
                  <Text style={styles.entryDuration}>2022 – 2026</Text>
                </View>
                <Text style={styles.entryCompany}>Gujarat Technological University</Text>
              </View>
            </View>

            {/* Achievements */}
            <View style={styles.section}>
              <SectionLabel label="Achievements" />
              {[
                {
                  title: "GTU Code Unnati Innovation Marathon",
                  desc: "Top 25 nationwide among 600+ teams.",
                },
                { title: "Line Follower Race 2023", desc: "Gold Medalist." },
                { title: "Table Tennis – College Sports Fest", desc: "Gold Medalist, 3 consecutive wins." },
              ].map((a) => (
                <View key={a.title} style={styles.achieveEntry}>
                  <Text style={styles.achieveTitle}>{a.title}</Text>
                  <Text style={styles.achieveDesc}>{a.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* ── RIGHT COLUMN ── */}
          <View style={styles.rightCol}>
            {/* Experience */}
            <View style={styles.section}>
              <SectionLabel label="Experience" />

              {[
                {
                  title: "Junior Software Engineer",
                  company: "Rang Digitech LLC",
                  duration: "Jan 2026 – Present",
                  points: [
                    "Built a full-stack Daily Reporting System using React, FastAPI, and PostgreSQL.",
                    "Implemented role-based approval workflows and KRA analytics dashboards.",
                    "Developed a dynamic template engine for configurable reporting.",
                    "Implemented JWT authentication and RESTful APIs.",
                  ],
                },
                {
                  title: "AI Automation Engineer (Intern)",
                  company: "Rang Digitech LLC",
                  duration: "Sep 2025 – Dec 2025",
                  points: [
                    "Built automation pipelines using n8n, LangChain, and OpenAI APIs.",
                    "Integrated automation systems with a FastAPI backend.",
                    "Reduced manual reporting through intelligent automation workflows.",
                  ],
                },
                {
                  title: "Web Management Head",
                  company: "Hexsociety",
                  duration: "Mar 2023 – Oct 2024",
                  points: [
                    "Led development and maintenance of the community platform.",
                    "Managed backend infrastructure and handled technology for multiple events.",
                  ],
                },
                {
                  title: "Software Developer",
                  company: "MSK Solutions",
                  duration: "Feb 2024 – Apr 2024",
                  points: [
                    "Built a multimodal translation system using OpenCV, speech-to-text, and Google APIs.",
                  ],
                },
              ].map((exp) => (
                <View key={exp.title} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{exp.title}</Text>
                    <Text style={styles.entryDuration}>{exp.duration}</Text>
                  </View>
                  <Text style={styles.entryCompany}>{exp.company}</Text>
                  {exp.points.map((p) => (
                    <Bullet key={p} text={p} />
                  ))}
                </View>
              ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
              <SectionLabel label="Projects" />

              {[
                {
                  title: "LinkedIn Outreach Automation Platform",
                  desc: "Streamlines LinkedIn lead generation and outreach workflows for sales teams with automated connection requests, follow-ups, and campaign analytics.",
                  tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "n8n"],
                },
                {
                  title: "Cloverse – AI Collaborative Learning Platform",
                  desc: "AI-powered platform with real-time chat, video conferencing, collaborative document editing, AI note summarization, quiz generation, and performance feedback.",
                  tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "OpenAI APIs", "Auth0"],
                },
                {
                  title: "Silence Sense",
                  desc: "Communication system for speech and hearing impaired individuals using gesture recognition, speech-to-text, text-to-speech, and multilingual translation.",
                  tech: ["Python", "OpenCV", "Tkinter", "Speech APIs", "Translation APIs"],
                },
              ].map((proj) => (
                <View key={proj.title} style={styles.projectEntry}>
                  <Text style={styles.projectTitle}>{proj.title}</Text>
                  <Text style={styles.projectDesc}>{proj.desc}</Text>
                  <View style={styles.techRow}>
                    {proj.tech.map((t) => (
                      <Text key={t} style={styles.techChip}>{t}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
