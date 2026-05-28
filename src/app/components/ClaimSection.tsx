import { motion } from "motion/react";
import { Zap, Brain, Activity, Dumbbell, Heart } from "lucide-react";

export function ClaimSection() {
  const claims = [
    {
      icon: Zap,
      claim: "INSTANT ENERGY",
      quote: "Feel the rush in 15 minutes!",
      color: "var(--neon-green)",
    },
    {
      icon: Brain,
      claim: "LASER FOCUS",
      quote: "Tunnel vision mode activated",
      color: "var(--electric-blue)",
    },
    {
      icon: Activity,
      claim: "ENDLESS ENDURANCE",
      quote: "Train 2x longer without fatigue",
      color: "#9d4edd",
    },
    {
      icon: Dumbbell,
      claim: "SUPERHUMAN STRENGTH",
      quote: "Lift heavier than ever before",
      color: "#ffea00",
    },
    {
      icon: Heart,
      claim: "MASSIVE PUMP",
      quote: "Veins popping, muscles bulging",
      color: "#ff1744",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, var(--neon-green) 40%, var(--neon-green) 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
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
            background: "linear-gradient(135deg, var(--neon-green), var(--electric-blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            The Claims
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            What social media and influencers promise you'll get
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {claims.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-75"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, transparent)`,
                  }}
                />

                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}40, ${item.color}10)`,
                        border: `1px solid ${item.color}60`,
                        boxShadow: `0 0 30px ${item.color}40`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 30px ${item.color}40`,
                          `0 0 50px ${item.color}60`,
                          `0 0 30px ${item.color}40`,
                        ],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} strokeWidth={1.5} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <motion.div
                        className="text-sm tracking-widest mb-2"
                        style={{ color: item.color }}
                        whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.claim}
                      </motion.div>
                      <p className="text-xs text-white/60 italic">"{item.quote}"</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[var(--neon-green)]/20 to-[var(--electric-blue)]/20 rounded-full px-8 py-4 border border-[var(--neon-green)]/30"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(57, 255, 20, 0.3)",
                "0 0 40px rgba(0, 217, 255, 0.3)",
                "0 0 20px rgba(57, 255, 20, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-white/80">But what does the science actually say?</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
