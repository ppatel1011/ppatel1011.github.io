import { motion } from "motion/react";
import { CheckCircle2, XCircle, TrendingUp } from "lucide-react";

export function VerdictSection() {
  return (
    <div className="relative min-h-screen py-32 px-6 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a1a1a] to-[#0a0a0f]" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "var(--neon-green)" : "var(--electric-blue)",
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl mb-8" style={{
              background: "linear-gradient(135deg, var(--neon-green), var(--electric-blue), var(--neon-green))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
            }}>
              The Verdict
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-green)] via-[var(--electric-blue)] to-[var(--neon-green)] rounded-3xl blur-3xl opacity-30" />

          <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <TrendingUp className="w-12 h-12 text-[var(--electric-blue)]" />
              </motion.div>

              <h3 className="text-4xl md:text-5xl mb-6 leading-tight">
                <span className="text-white">Partially supported by </span>
                <span className="text-[var(--neon-green)]">science</span>
                <span className="text-white">, but exaggerated by </span>
                <span className="text-[#ff1744)]">marketing</span>
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--neon-green)] to-transparent rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-gradient-to-br from-[var(--neon-green)]/10 to-[var(--neon-green)]/[0.02] rounded-3xl border border-[var(--neon-green)]/30 backdrop-blur-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-10 h-10 text-[var(--neon-green)] flex-shrink-0" strokeWidth={1.5} />
                <h4 className="text-3xl text-[var(--neon-green)]">What Works</h4>
              </div>

              <ul className="space-y-4 text-white/80">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>Caffeine enhances endurance and alertness at proper doses (3-6 mg/kg)</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <span>Creatine improves strength and power output with consistent use</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                  <span>Beta-alanine may help with high-intensity exercise (1-4 minutes)</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <span>Placebo effect and ritual can enhance motivation</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#ff1744] to-transparent rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-gradient-to-br from-[#ff1744]/10 to-[#ff1744]/[0.02] rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <XCircle className="w-10 h-10 text-[#ff1744] flex-shrink-0" strokeWidth={1.5} />
                <h4 className="text-3xl text-[#ff1744]">Exaggerated Claims</h4>
              </div>

              <ul className="space-y-4 text-white/80">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>"Instant" or "superhuman" strength gains are marketing hype</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <span>Many ingredients are underdosed or lack scientific backing</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                  <span>Proprietary blends hide ineffective doses</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <span>Not a replacement for proper training, nutrition, and sleep</span>
                </motion.li>
              </ul>
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
          
        </motion.div>
      </div>
    </div>
  );
}
