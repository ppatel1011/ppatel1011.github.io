import { motion } from "motion/react";
import { FlaskConical, Users, CheckCircle2, BarChart3 } from "lucide-react";

export function ScientificProcessSection() {
  return (
    <div className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a1a2e] to-[#0a0a0f]" />

      <div className="absolute inset-0 opacity-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            p&lt;0.05
          </motion.div>
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
            background: "linear-gradient(135deg, var(--electric-blue), var(--neon-green))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            The Scientific Process
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Why peer-reviewed research matters more than testimonials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: FlaskConical,
              title: "Controlled Studies",
              description: "Randomized trials isolate variables to determine causation, not just correlation",
              color: "var(--electric-blue)",
            },
            {
              icon: Users,
              title: "Sample Size",
              description: "Large participant groups reduce the impact of individual variation and chance",
              color: "var(--neon-green)",
            },
            {
              icon: CheckCircle2,
              title: "Peer Review",
              description: "Independent experts scrutinize methods, data analysis, and conclusions before publication",
              color: "var(--deep-purple)",
            },
            {
              icon: BarChart3,
              title: "Replication",
              description: "Multiple studies reaching the same conclusion strengthen confidence in findings",
              color: "var(--electric-blue)",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative"
              >
                <div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, transparent)`,
                  }}
                />

                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}60`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${item.color}40`,
                        `0 0 40px ${item.color}60`,
                        `0 0 20px ${item.color}40`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </motion.div>

                  <h3 className="text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ff1744] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[#ff1744]/10 to-[#ff1744]/[0.02] rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl p-8">
              <h3 className="text-2xl mb-6 text-[#ff1744]">Anecdotal Evidence</h3>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Individual experiences (n=1)</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>No control group for comparison</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Confirmation bias and selective memory</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Cannot distinguish correlation from causation</span>
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
            <div className="absolute -inset-2 bg-gradient-to-br from-[var(--neon-green)] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[var(--neon-green)]/10 to-[var(--neon-green)]/[0.02] rounded-3xl border border-[var(--neon-green)]/30 backdrop-blur-xl p-8">
              <h3 className="text-2xl mb-6 text-[var(--neon-green)]">Scientific Evidence</h3>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Large sample sizes (n=100+)</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Placebo-controlled and double-blinded</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Statistical analysis eliminates chance</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] mt-2" />
                  <span>Reproducible by independent researchers</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-green)] rounded-3xl blur-2xl opacity-30" />

          <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-8 text-center">
            <motion.div
              className="inline-block w-16 h-16 rounded-2xl bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/50 flex items-center justify-center mb-6"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FlaskConical className="w-8 h-8 text-[var(--electric-blue)]" />
            </motion.div>

            <h3 className="text-3xl mb-4 text-white">The Hierarchy of Evidence</h3>
            <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
              Meta-analyses of randomized controlled trials sit at the top of the evidence pyramid.
              Single testimonials or influencer experiences sit at the bottom. When evaluating supplement claims,
              always ask: Where is the published, peer-reviewed research?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
