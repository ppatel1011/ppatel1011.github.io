import { motion } from "motion/react";
import { TrendingDown, Moon, Zap, RefreshCw } from "lucide-react";

export function LongTermSection() {
  return (
    <div className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]" />

      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `radial-gradient(circle, #ff1744 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6" style={{
            background: "linear-gradient(135deg, #ff1744, #ffea00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Long-Term Implications
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The hidden costs of chronic stimulant use
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ff1744] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[#ff1744]/10 to-[#ff1744]/[0.02] rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#ff1744]/20 border border-[#ff1744]/50 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(255, 23, 68, 0.3)",
                      "0 0 40px rgba(255, 23, 68, 0.6)",
                      "0 0 20px rgba(255, 23, 68, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RefreshCw className="w-7 h-7 text-[#ff1744]" />
                </motion.div>
                <h3 className="text-2xl text-white">Caffeine Tolerance</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 rounded-2xl p-4 border border-[#ff1744]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Week 1</span>
                    <span className="text-[#ff1744]">200mg = High Energy</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff1744] to-[#ffea00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ delay: 0.3, duration: 1 }}
                    />
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-4 border border-[#ff1744]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Week 12</span>
                    <span className="text-[#ff1744]">200mg = Baseline</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff1744] to-[#ffea00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mt-4">
                  Regular use downregulates adenosine receptors. The same dose produces diminishing effects,
                  creating a cycle of increasing consumption to achieve the original feeling.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ffea00] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[#ffea00]/10 to-[#ffea00]/[0.02] rounded-3xl border border-[#ffea00]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#ffea00]/20 border border-[#ffea00]/50 flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    boxShadow: [
                      "0 0 20px rgba(255, 234, 0, 0.3)",
                      "0 0 40px rgba(255, 234, 0, 0.6)",
                      "0 0 20px rgba(255, 234, 0, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Moon className="w-7 h-7 text-[#ffea00]" />
                </motion.div>
                <h3 className="text-2xl text-white">Sleep Architecture</h3>
              </div>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffea00] mt-2" />
                  <span>Caffeine half-life: 5-6 hours</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffea00] mt-2" />
                  <span>Afternoon use disrupts REM and deep sleep</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffea00] mt-2" />
                  <span>Poor sleep impairs recovery and muscle growth</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffea00] mt-2" />
                  <span>Creates dependency: tired without pre-workout</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--electric-blue)] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--electric-blue)]/[0.02] rounded-3xl border border-[var(--electric-blue)]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/50 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(0, 217, 255, 0.3)",
                      "0 0 40px rgba(0, 217, 255, 0.6)",
                      "0 0 20px rgba(0, 217, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Zap className="w-7 h-7 text-[var(--electric-blue)]" />
                </motion.div>
                <h3 className="text-2xl text-white">Psychological Reliance</h3>
              </div>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2" />
                  <span>"I cannot train without my pre-workout"</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2" />
                  <span>Ritual becomes crutch for motivation</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2" />
                  <span>Undermines intrinsic drive and discipline</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--electric-blue)] mt-2" />
                  <span>Normalizes substance use in fitness culture</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--neon-green)] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[var(--neon-green)]/10 to-[var(--neon-green)]/[0.02] rounded-3xl border border-[var(--neon-green)]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[var(--neon-green)]/20 border border-[var(--neon-green)]/50 flex items-center justify-center"
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 0 20px rgba(57, 255, 20, 0.3)",
                      "0 0 40px rgba(57, 255, 20, 0.6)",
                      "0 0 20px rgba(57, 255, 20, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingDown className="w-7 h-7 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-2xl text-white">Financial Cost</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 rounded-2xl p-4 border border-[var(--neon-green)]/20">
                  <div className="text-center">
                    <motion.div
                      className="text-4xl text-[var(--neon-green)] mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      $600-$1200
                    </motion.div>
                    <p className="text-white/60 text-sm">Per year on pre-workout supplements</p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  Money that could fund gym memberships, coaching, quality whole foods, or performance testing.
                  The supplement industry profits when consumers believe products are essential to progress.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#ff1744]/20 to-[#ffea00]/20 rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl px-8 py-6 max-w-4xl">
            <p className="text-white/90 text-lg leading-relaxed">
              Short-term gains can mask long-term costs. Sustainable performance comes from consistent training,
              quality sleep, and proper nutrition - not chronic stimulant dependence.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
