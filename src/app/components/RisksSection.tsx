import { motion } from "motion/react";
import { Heart, Moon, Zap, AlertTriangle } from "lucide-react";

export function RisksSection() {
  const risks = [
    {
      icon: Heart,
      title: "Cardiovascular Stress",
      description: "Excessive caffeine can increase heart rate and blood pressure, potentially dangerous for those with heart conditions.",
      severity: "high",
    },
    {
      icon: Moon,
      title: "Sleep Disruption",
      description: "Late consumption affects sleep quality and circadian rhythm, impairing recovery and performance.",
      severity: "medium",
    },
    {
      icon: Zap,
      title: "Anxiety & Jitters",
      description: "High stimulant doses can trigger nervousness, tremors, and difficulty concentrating.",
      severity: "medium",
    },
    {
      icon: AlertTriangle,
      title: "Caffeine Overload",
      description: "Multiple sources (coffee, energy drinks, pre-workout) can lead to dangerous daily intake levels (>400mg).",
      severity: "high",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <motion.path
              d="M 0 200 Q 100 100 200 200 T 400 200 T 600 200 T 800 200"
              stroke="#ff1744"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              animate={{
                d: [
                  "M 0 200 Q 100 100 200 200 T 400 200 T 600 200 T 800 200",
                  "M 0 200 Q 100 300 200 200 T 400 200 T 600 200 T 800 200",
                  "M 0 200 Q 100 100 200 200 T 400 200 T 600 200 T 800 200",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={40 * i}
                cy="200"
                r="4"
                fill="#ff1744"
                animate={{
                  cy: [200, 150, 250, 200],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </div>
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
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-[#ff1744]">
              The Risks
            </h2>
          </motion.div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Potential side effects and health concerns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
                  style={{
                    background: risk.severity === "high"
                      ? "linear-gradient(135deg, #ff1744, transparent)"
                      : "linear-gradient(135deg, #ffea00, transparent)",
                  }}
                />

                <div
                  className="relative h-full rounded-3xl border backdrop-blur-xl p-8"
                  style={{
                    background: risk.severity === "high"
                      ? "linear-gradient(135deg, rgba(255, 23, 68, 0.1), rgba(255, 23, 68, 0.02))"
                      : "linear-gradient(135deg, rgba(255, 234, 0, 0.1), rgba(255, 234, 0, 0.02))",
                    borderColor: risk.severity === "high" ? "#ff174440" : "#ffea0040",
                  }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: risk.severity === "high" ? "#ff174420" : "#ffea0020",
                        border: risk.severity === "high" ? "1px solid #ff174460" : "1px solid #ffea0060",
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      animate={{
                        boxShadow: risk.severity === "high"
                          ? ["0 0 20px rgba(255, 23, 68, 0.3)", "0 0 40px rgba(255, 23, 68, 0.5)", "0 0 20px rgba(255, 23, 68, 0.3)"]
                          : ["0 0 20px rgba(255, 234, 0, 0.3)", "0 0 40px rgba(255, 234, 0, 0.5)", "0 0 20px rgba(255, 234, 0, 0.3)"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: risk.severity === "high" ? "#ff1744" : "#ffea00" }}
                        strokeWidth={1.5}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.h3
                          className="text-2xl text-white"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {risk.title}
                        </motion.h3>
                        <motion.span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: risk.severity === "high" ? "#ff174420" : "#ffea0020",
                            color: risk.severity === "high" ? "#ff1744" : "#ffea00",
                            border: risk.severity === "high" ? "1px solid #ff174440" : "1px solid #ffea0040",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {risk.severity === "high" ? "HIGH RISK" : "MODERATE"}
                        </motion.span>
                      </div>
                      <motion.p
                        className="text-white/70 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {risk.description}
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
