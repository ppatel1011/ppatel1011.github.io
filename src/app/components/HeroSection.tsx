import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0f2e] to-[#0a0a0f]"
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--neon-green)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px var(--neon-green)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ y }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block"
          >
            <motion.div
              style={{ scale }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-green)] to-[var(--electric-blue)] rounded-3xl opacity-30 blur-3xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-[var(--neon-green)]/20 to-[var(--electric-blue)]/20 rounded-3xl backdrop-blur-xl border border-[var(--neon-green)]/30 flex items-center justify-center">
                <Zap className="w-24 h-24 text-[var(--neon-green)]" strokeWidth={1.5} />
              </div>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[var(--neon-green)] to-[var(--electric-blue)] rounded-3xl opacity-50 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl tracking-tight"
            style={{
              background: "linear-gradient(135deg, var(--neon-green), var(--electric-blue))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pre-Workout
            <br />
            Supplements
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Do pre-workout supplements actually improve athletic performance,
            <br />
            or are the claims exaggerated?
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[var(--neon-green)] text-sm uppercase tracking-widest"
            >
              Scroll to explore
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="w-px h-16 bg-gradient-to-b from-[var(--neon-green)] to-transparent mx-auto mt-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
