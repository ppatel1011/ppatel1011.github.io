import { motion } from "motion/react";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

export function ScienceSection() {
  const ingredients = [
    {
      name: "Caffeine",
      dosage: "3-6 mg/kg body weight",
      evidence: "strong",
      icon: CheckCircle2,
      color: "var(--neon-green)",
      findings: "Enhances endurance, power output, and focus. Well-documented ergogenic aid.",
      studies: "200+ peer-reviewed studies",
    },
    {
      name: "Beta-Alanine",
      dosage: "4-6 grams daily",
      evidence: "moderate",
      icon: AlertCircle,
      color: "var(--electric-blue)",
      findings: "Buffers muscle acid, may improve high-intensity exercise lasting 1-4 minutes.",
      studies: "Effective with chronic loading",
    },
    {
      name: "Creatine Monohydrate",
      dosage: "5 grams daily",
      evidence: "strong",
      icon: CheckCircle2,
      color: "var(--neon-green)",
      findings: "Improves strength, power, and muscle mass. One of the most researched supplements.",
      studies: "500+ studies confirm efficacy",
    },
    {
      name: "Citrulline Malate",
      dosage: "6-8 grams",
      evidence: "moderate",
      icon: AlertCircle,
      color: "var(--electric-blue)",
      findings: "May reduce fatigue and improve blood flow. Mixed results in research.",
      studies: "Limited but promising data",
    },
    {
      name: "BCAAs",
      dosage: "5-10 grams",
      evidence: "weak",
      icon: XCircle,
      color: "#ff1744",
      findings: "Minimal benefit when protein intake is adequate. Redundant with complete protein.",
      studies: "Not superior to whole protein",
    },
    {
      name: "Proprietary Blends",
      dosage: "Undisclosed amounts",
      evidence: "weak",
      icon: XCircle,
      color: "#ff1744",
      findings: "Ingredients often underdosed. No transparency on effective dosages.",
      studies: "Lack of peer-reviewed support",
    },
  ];

  const getEvidenceLabel = (evidence: string) => {
    switch (evidence) {
      case "strong":
        return "Strong Evidence";
      case "moderate":
        return "Moderate Evidence";
      case "weak":
        return "Weak/Inconsistent";
      default:
        return "";
    }
  };

  return (
    <div className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f1a1a] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6" style={{
            background: "linear-gradient(135deg, white, var(--neon-green))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            The Science
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Evidence-based analysis of common pre-workout ingredients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                }}
                className="relative group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, transparent)`,
                  }}
                />

                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-xl p-6 hover:border-opacity-50 transition-all duration-500"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <h3 className="text-xl mb-1 text-white">{item.name}</h3>
                      <p className="text-xs text-white/50">{item.dosage}</p>
                    </motion.div>
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.color}20`,
                        border: `1px solid ${item.color}60`,
                      }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={2} />
                    </motion.div>
                  </div>

                  <motion.div
                    className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                    style={{
                      background: `${item.color}20`,
                      color: item.color,
                      border: `1px solid ${item.color}40`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {getEvidenceLabel(item.evidence)}
                  </motion.div>

                  <motion.p
                    className="text-sm text-white/70 mb-3 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.findings}
                  </motion.p>

                  <motion.p
                    className="text-xs text-white/50 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item.studies}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-[var(--neon-green)]/30 backdrop-blur-xl p-8"
            whileHover={{ scale: 1.02 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(57, 255, 20, 0.2)",
                "0 0 40px rgba(57, 255, 20, 0.4)",
                "0 0 20px rgba(57, 255, 20, 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.h4
              className="text-2xl mb-4 text-[var(--neon-green)]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >Main Point</motion.h4>
            <motion.p
              className="text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Not all ingredients are created equal. Caffeine and creatine have strong scientific backing,
              while many other ingredients found in pre-workouts have limited or inconsistent evidence.
              The effectiveness depends heavily on proper dosing and individual response.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
