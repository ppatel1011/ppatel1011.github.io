import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Brain, TrendingUp, Sparkles } from "lucide-react";

export function PlaceboSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const splitX = useTransform(scrollYProgress, [0.2, 0.5], [0, 100]);

  return (
    <div ref={ref} className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a1a2e] to-[#0a0a0f]" />

      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[var(--deep-purple)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            background: "linear-gradient(135deg, var(--deep-purple), var(--electric-blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            The Placebo Effect
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            When belief becomes biology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--neon-green)] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[var(--neon-green)]/10 to-[var(--neon-green)]/[0.02] rounded-3xl border border-[var(--neon-green)]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[var(--neon-green)]/20 border border-[var(--neon-green)]/50 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(57, 255, 20, 0.3)",
                      "0 0 40px rgba(57, 255, 20, 0.6)",
                      "0 0 20px rgba(57, 255, 20, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-7 h-7 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-3xl text-[var(--neon-green)]">Real Physiological Effects</h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="relative h-24 bg-black/30 rounded-2xl border border-[var(--neon-green)]/20 overflow-hidden"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-end px-4 pb-4 gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[65, 70, 85, 90, 92, 94].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[var(--neon-green)] to-[var(--neon-green)]/50 rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                <ul className="space-y-3 text-white/80">
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                    <span>Caffeine blocks adenosine receptors</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                    <span>Increases adrenaline release</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                    <span>Measurable performance gain: ~3-5%</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--deep-purple)] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[var(--deep-purple)]/10 to-[var(--deep-purple)]/[0.02] rounded-3xl border border-[var(--deep-purple)]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[var(--deep-purple)]/20 border border-[var(--deep-purple)]/50 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(157, 78, 221, 0.3)",
                      "0 0 40px rgba(157, 78, 221, 0.6)",
                      "0 0 20px rgba(157, 78, 221, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Brain className="w-7 h-7 text-[var(--deep-purple)]" />
                </motion.div>
                <h3 className="text-3xl text-[var(--deep-purple)]">Psychological Expectation</h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="relative h-24 bg-black/30 rounded-2xl border border-[var(--deep-purple)]/20 overflow-hidden"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-end px-4 pb-4 gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[50, 65, 75, 85, 88, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[var(--deep-purple)] to-[var(--deep-purple)]/50 rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                <ul className="space-y-3 text-white/80">
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--deep-purple)] mt-2" />
                    <span>Belief activates motivation centers</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--deep-purple)] mt-2" />
                    <span>Reduces perceived exertion</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--deep-purple)] mt-2" />
                    <span>Placebo can account for 20-40% of perceived benefit</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[var(--deep-purple)]/20 to-[var(--electric-blue)]/20 rounded-3xl border border-[var(--deep-purple)]/30 backdrop-blur-xl p-8 max-w-4xl">
            <Sparkles className="w-10 h-10 text-[var(--electric-blue)] mx-auto mb-4" />
            <p className="text-white/90 text-lg leading-relaxed">
              Studies show that even when participants are told they are receiving a placebo,
              they still experience performance improvements. The ritual, expectation, and psychological
              priming of taking a pre-workout creates real neurological changes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
