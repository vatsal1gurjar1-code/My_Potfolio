import { motion } from "framer-motion";

const Cloud = ({ delay, duration, top, scale, opacity, className }: any) => (
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: "100vw" }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className={`absolute pointer-events-none ${className}`}
    style={{ top, transform: `scale(${scale})`, opacity }}
  >
    {/* Premium Soft SVG Cloud - Made smaller */}
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] drop-shadow-2xl">
      <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.31-1.748-4.212-4-4.46V10c0-2.761-2.239-5-5-5-2.5 0-4.57 1.838-4.935 4.22C7.525 9.07 7 9.5 7 10c0 .678.337 1.282.858 1.66A4.502 4.502 0 003 16c0 2.485 2.015 4.5 4.5 4.5h10z" />
    </svg>
  </motion.div>
);

const ShootingStar = ({ delay, top, left }: any) => (
  <motion.div
    initial={{ x: -100, y: -100, opacity: 0, rotate: 45 }}
    animate={{ 
      x: 600, // Move diagonally down and to the right
      y: 600,  
      opacity: [0, 1, 1, 0],
      rotate: 45 // Enforce rotation within Framer Motion so it doesn't get overwritten
    }}
    transition={{
      duration: 5, // "Little fast" (moderate speed)
      repeat: Infinity,
      ease: "linear",
      delay,
      repeatDelay: Math.random() * 8 + 6, // Wait 6 to 14 seconds between stars
    }}
    // bg-gradient-to-l from-white means the right side (bottom-right) is the bright glowing head.
    className="absolute h-[2px] w-[150px] bg-gradient-to-l from-white via-white/80 to-transparent blur-[1px]"
    style={{ top, left }}
  />
);

export function DayNightBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-1000 ease-in-out bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      
      {/* ================================================================= */}
      {/* LIGHT MODE ELEMENTS (Hidden in Dark Mode) */}
      {/* ================================================================= */}
      <div className="absolute inset-0 block dark:hidden">
        {/* The Sun - Moved to left side */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-br from-yellow-100 to-yellow-400 shadow-[0_0_120px_rgba(250,204,21,0.8)]"
        />

        {/* Light Mode Clouds (White, bright) - Made significantly slower */}
        <Cloud delay={0} duration={90} top="5%" scale={1.2} opacity={0.8} className="text-white" />
        <Cloud delay={-25} duration={110} top="25%" scale={0.8} opacity={0.6} className="text-white" />
        <Cloud delay={-50} duration={80} top="45%" scale={1.5} opacity={0.5} className="text-sky-50" />
        <Cloud delay={-20} duration={120} top="60%" scale={0.9} opacity={0.7} className="text-white" />
      </div>

      {/* ================================================================= */}
      {/* DARK MODE ELEMENTS (Hidden in Light Mode) */}
      {/* ================================================================= */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Static Starry Background */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px),
              radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 3px),
              radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 4px)
            `,
            backgroundSize: '550px 550px, 350px 350px, 250px 250px',
            backgroundPosition: '0 0, 40px 60px, 130px 270px'
          }}
        />

        {/* The Moon - Moved to left side */}
        <div className="absolute top-[15%] left-[15%]">
          {/* Moon Glow */}
          <motion.div 
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-10 rounded-full bg-slate-100 blur-[60px]"
          />
          {/* Moon Body (Crescent illusion via box-shadow) */}
          <div className="relative w-[100px] h-[100px] rounded-full bg-slate-200 shadow-[inset_-15px_10px_0_0_rgba(203,213,225,1)]" />
        </div>

        {/* Shooting Stars */}
        <ShootingStar delay={0} top="10%" left="80%" />
        <ShootingStar delay={2} top="30%" left="60%" />
        <ShootingStar delay={5} top="-10%" left="50%" />
        <ShootingStar delay={7} top="20%" left="90%" />

        {/* Dark Mode Clouds - Made lighter (slate-500/600) so they catch the "moonlight" and are visible against the dark sky */}
        <Cloud delay={0} duration={100} top="10%" scale={1.2} opacity={0.25} className="text-slate-500" />
        <Cloud delay={-30} duration={130} top="35%" scale={0.9} opacity={0.3} className="text-slate-600" />
        <Cloud delay={-60} duration={95} top="55%" scale={1.4} opacity={0.2} className="text-slate-400" />
        <Cloud delay={-15} duration={115} top="70%" scale={1.1} opacity={0.25} className="text-slate-500" />
      </div>

    </div>
  );
}
