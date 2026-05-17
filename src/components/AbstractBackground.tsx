import { motion } from "framer-motion";

export function AbstractBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Abstract Wavy Line 1 */}
        <motion.path
          d="M 0 400 C 300 200, 700 800, 1000 600"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
            d: [
              "M 0 400 C 300 200, 700 800, 1000 600",
              "M 0 600 C 400 800, 600 200, 1000 400",
              "M 0 400 C 300 200, 700 800, 1000 600",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Abstract Wavy Line 2 */}
        <motion.path
          d="M 0 700 C 400 900, 600 100, 1000 300"
          fill="none"
          stroke="url(#accent-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
            d: [
              "M 0 700 C 400 900, 600 100, 1000 300",
              "M 0 300 C 200 100, 800 900, 1000 700",
              "M 0 700 C 400 900, 600 100, 1000 300",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Abstract Wavy Line 3 */}
        <motion.path
          d="M 0 200 C 400 100, 800 600, 1000 800"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            d: [
              "M 0 200 C 400 100, 800 600, 1000 800",
              "M 0 800 C 200 600, 600 100, 1000 200",
              "M 0 200 C 400 100, 800 600, 1000 800",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Abstract Wavy Line 4 */}
        <motion.path
          d="M 0 500 C 200 800, 800 200, 1000 500"
          fill="none"
          stroke="url(#accent-gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            d: [
              "M 0 500 C 200 800, 800 200, 1000 500",
              "M 0 500 C 800 200, 200 800, 1000 500",
              "M 0 500 C 200 800, 800 200, 1000 500",
            ],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Abstract Wavy Line 5 */}
        <motion.path
          d="M 0 800 C 300 400, 700 900, 1000 100"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.7, 0],
            d: [
              "M 0 800 C 300 400, 700 900, 1000 100",
              "M 0 100 C 700 900, 300 400, 1000 800",
              "M 0 800 C 300 400, 700 900, 1000 100",
            ],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Abstract Wavy Line 6 */}
        <motion.path
          d="M 0 100 C 500 500, 500 500, 1000 900"
          fill="none"
          stroke="url(#accent-gradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
            d: [
              "M 0 100 C 500 500, 500 500, 1000 900",
              "M 0 900 C 500 500, 500 500, 1000 100",
              "M 0 100 C 500 500, 500 500, 1000 900",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Abstract Wavy Line 7 */}
        <motion.path
          d="M 0 900 C 200 100, 800 100, 1000 900"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
            d: [
              "M 0 900 C 200 100, 800 100, 1000 900",
              "M 0 100 C 200 900, 800 900, 1000 100",
              "M 0 900 C 200 100, 800 100, 1000 900",
            ],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        />
      </svg>
    </div>
  );
}
