import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    root.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <NavLink to="/" className="font-display text-lg font-extrabold tracking-wide">
            Vatsal<span className="text-gradient">.dev</span>
          </NavLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/70 hover:text-foreground",
                    isActive && "bg-secondary text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link to="/contact">
              <span className={buttonVariants({ className: "rounded-full" })}>Let's Talk</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              onClick={() => setOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-background/95 lg:hidden"
          >
            <div className="page-shell flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-secondary/70 hover:text-foreground",
                      isActive && "bg-secondary text-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
