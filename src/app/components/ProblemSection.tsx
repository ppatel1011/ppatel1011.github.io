import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Brain, Zap, TrendingUp, Activity } from "lucide-react";

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cards = [
    {
      icon: Activity,
      title: "Fatigue",
      description: "During exercise, muscle glycogen depletes and metabolic byproducts accumulate, leading to decreased performance.",
    },
    {
      icon: Zap,
      title: "ATP Production",
      description: "Adenosine triphosphate (ATP) is the primary energy currency. When ATP stores are low, muscles cannot contract efficiently.",
    },
    {
      icon: Brain,
      title: "Mental Focus",
      description: "Central nervous system fatigue reduces neural drive to muscles, affecting coordination and effort perception.",
    },
    {
      icon: TrendingUp,
      title: "Performance Limits",
      description: "Multiple physiological factors combine to create a ceiling on athletic output and endurance capacity.",
    },
  ];

  return (
    <div ref={ref} className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f1a1a] to-[#0a0a0f]" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--neon-green) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6" style={{
            background: "linear-gradient(135deg, white, var(--electric-blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            The Problem
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-green)]/20 to-[var(--electric-blue)]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-xl p-8 hover:border-[var(--neon-green)]/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-[var(--neon-green)] rounded-2xl blur-lg"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-[var(--neon-green)]/30 to-[var(--electric-blue)]/30 rounded-2xl flex items-center justify-center border border-[var(--neon-green)]/50">
                          <Icon className="w-8 h-8 text-[var(--neon-green)]" strokeWidth={1.5} />
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl mb-3 text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        className="text-white/70 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
