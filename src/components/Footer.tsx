import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const links = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vatsalgurjar" },
  { label: "GitHub", icon: Github, href: "https://github.com/" },
  { label: "Email", icon: Mail, href: "mailto:vatsal1gurjar1@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold">Vatsal K. Gurjar</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Vadodara, Gujarat, India
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/30 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
