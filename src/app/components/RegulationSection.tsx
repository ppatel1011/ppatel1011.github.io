import { motion } from "motion/react";
import { ShieldAlert, FileWarning, AlertOctagon, Scan } from "lucide-react";

export function RegulationSection() {
  return (
    <div className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a1a] to-[#0a0a0f]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #ff1744 2px, #ff1744 4px)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px #ff1744",
                "0 0 40px #ff1744",
                "0 0 20px #ff1744",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-[#ff1744]">
              Regulation & Safety
            </h2>
          </motion.div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The FDA does not approve supplements before they hit the market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ff1744] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[#ff1744]/10 to-[#ff1744]/[0.02] rounded-3xl border border-[#ff1744]/40 backdrop-blur-xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#ff1744]/20 border border-[#ff1744]/60 flex items-center justify-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    boxShadow: [
                      "0 0 20px rgba(255, 23, 68, 0.4)",
                      "0 0 40px rgba(255, 23, 68, 0.6)",
                      "0 0 20px rgba(255, 23, 68, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ShieldAlert className="w-7 h-7 text-[#ff1744]" />
                </motion.div>
                <h3 className="text-2xl text-white">Dietary Supplements</h3>
              </div>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>No pre-market approval required</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Companies self-certify safety</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>FDA acts only after harm is reported</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Minimal quality control enforcement</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--neon-green)] to-transparent rounded-3xl blur-2xl opacity-40" />

            <div className="relative bg-gradient-to-br from-[var(--neon-green)]/10 to-[var(--neon-green)]/[0.02] rounded-3xl border border-[var(--neon-green)]/40 backdrop-blur-xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[var(--neon-green)]/20 border border-[var(--neon-green)]/60 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(57, 255, 20, 0.4)",
                      "0 0 40px rgba(57, 255, 20, 0.6)",
                      "0 0 20px rgba(57, 255, 20, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <ShieldAlert className="w-7 h-7 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-2xl text-white">Pharmaceutical Drugs</h3>
              </div>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Rigorous pre-market testing required</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Clinical trials with thousands of participants</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>FDA approval before sale</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Ongoing safety monitoring</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ff1744] via-[#ffea00] to-[#ff1744] rounded-3xl blur-2xl opacity-30" />

          <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff1744]/20 border border-[#ff1744]/50 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FileWarning className="w-8 h-8 text-[#ff1744]" />
                </motion.div>
                <h4 className="text-xl mb-2 text-white">Contamination</h4>
                <p className="text-white/60 text-sm">
                  Studies find undeclared stimulants and banned substances in up to 20% of supplements tested
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ffea00]/20 border border-[#ffea00]/50 flex items-center justify-center"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <AlertOctagon className="w-8 h-8 text-[#ffea00]" />
                </motion.div>
                <h4 className="text-xl mb-2 text-white">Inaccurate Labels</h4>
                <p className="text-white/60 text-sm">
                  Independent testing reveals many products contain far less (or more) than claimed
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/50 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Scan className="w-8 h-8 text-[var(--electric-blue)]" />
                </motion.div>
                <h4 className="text-xl mb-2 text-white">Third-Party Testing</h4>
                <p className="text-white/60 text-sm">
                  Look for NSF Certified for Sport, Informed-Sport, or USP verification seals
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#ff1744]/20 to-[#ffea00]/20 rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl px-8 py-6">
            <p className="text-white/90 text-lg max-w-3xl">
              Without FDA oversight, the burden of proving safety falls on consumers after products are already on shelves
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
