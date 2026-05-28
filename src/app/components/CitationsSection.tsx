import { motion } from "motion/react";
import { FileText } from "lucide-react";

export function CitationsSection() {
  const citations = [
    {
      author: "Goldstein, E. R., et al.",
      title: "International society of sports nutrition position stand: caffeine and performance.",
      journal: "Journal of the International Society of Sports Nutrition",
      year: "2010",
      volume: "7.1",
      pages: "1-15",
    },
    {
      author: "Hobson, R. M., et al.",
      title: "Effects of β-alanine supplementation on exercise performance: a meta-analysis.",
      journal: "Amino Acids",
      year: "2012",
      volume: "43.1",
      pages: "25-37",
    },
    {
      author: "Kreider, R. B., et al.",
      title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine.",
      journal: "Journal of the International Society of Sports Nutrition",
      year: "2017",
      volume: "14.1",
      pages: "1-18",
    },
    {
      author: "Pérez-Guisado, J., and Jakeman, P. M.",
      title: "Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness.",
      journal: "Journal of Strength and Conditioning Research",
      year: "2010",
      volume: "24.5",
      pages: "1215-1222",
    },
    {
      author: "Blomstrand, E., et al.",
      title: "Branched-chain amino acids activate key enzymes in protein synthesis after physical exercise.",
      journal: "The Journal of Nutrition",
      year: "2006",
      volume: "136.1",
      pages: "269S-273S",
    },
    {
      author: "Harty, P. S., et al.",
      title: "Multi-ingredient pre-workout supplements, safety implications, and performance outcomes: a brief review.",
      journal: "Journal of the International Society of Sports Nutrition",
      year: "2018",
      volume: "15.1",
      pages: "1-8",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FileText className="w-10 h-10 text-[var(--electric-blue)]" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{
            background: "linear-gradient(135deg, white, var(--electric-blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Works Cited
          </h2>
          <p className="text-white/60"></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {citations.map((citation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--electric-blue)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-xl p-6 hover:border-[var(--electric-blue)]/30 transition-all duration-500">
                <div className="flex gap-4">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/30 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(0, 217, 255, 0.2)",
                        "0 0 20px rgba(0, 217, 255, 0.4)",
                        "0 0 10px rgba(0, 217, 255, 0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <span className="text-[var(--electric-blue)] text-sm">{index + 1}</span>
                  </motion.div>

                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <p className="text-white/90 leading-relaxed">
                      {citation.author} "{citation.title}" <em>{citation.journal}</em>, vol. {citation.volume}, {citation.year}, pp. {citation.pages}.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[var(--neon-green)]/10 to-[var(--electric-blue)]/10 rounded-2xl border border-white/10 backdrop-blur-xl px-8 py-6"
            whileHover={{ scale: 1.05 }}
            animate={{
              borderColor: [
                "rgba(57, 255, 20, 0.2)",
                "rgba(0, 217, 255, 0.2)",
                "rgba(57, 255, 20, 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-white/60 text-sm">A Grade 10 Biology Project by Parth</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
