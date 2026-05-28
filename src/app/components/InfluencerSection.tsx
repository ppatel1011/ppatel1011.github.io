import { motion } from "motion/react";
import { DollarSign, AlertTriangle, TrendingUp, Users } from "lucide-react";

export function InfluencerSection() {
  const influencerCards = [
    {
      username: "@fitnessguru",
      claim: "I gained 15 lbs of muscle in 30 days!",
      sponsored: true,
      earnings: "$50K/month from affiliate links",
    },
    {
      username: "@shredded_life",
      claim: "This pre-workout changed my life forever",
      sponsored: true,
      earnings: "Paid sponsorship deals",
    },
    {
      username: "@gym_beast",
      claim: "Get 20% off with my code BEAST20",
      sponsored: true,
      earnings: "Commission on every sale",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]" />

      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #ff1744 10px, #ff1744 20px)`,
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
            Influencer Marketing
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The business model behind the hype
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {influencerCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#ff1744] to-[#ffea00] rounded-3xl blur-xl opacity-50" />

              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl border border-white/20 backdrop-blur-xl p-6 overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs bg-[#ff1744]/80 text-white border border-[#ff1744]"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 23, 68, 0.5)",
                      "0 0 20px rgba(255, 23, 68, 0.8)",
                      "0 0 10px rgba(255, 23, 68, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SPONSORED
                </motion.div>

                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff1744]/30 to-[#ffea00]/30 border-2 border-white/30 mb-3" />
                  <h3 className="text-lg text-white/90 mb-1">{card.username}</h3>
                  <p className="text-sm text-white/60">2.4M followers</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-black/40 rounded-2xl p-4 border border-white/10">
                    <p className="text-white/80 italic text-sm">"{card.claim}"</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-[#ffea00] text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>{card.earnings}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ff1744] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[#ff1744]/10 to-[#ff1744]/[0.02] rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#ff1744]/20 border border-[#ff1744]/50 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <AlertTriangle className="w-7 h-7 text-[#ff1744]" />
                </motion.div>
                <h3 className="text-2xl text-[#ff1744]">Misleading Tactics</h3>
              </div>

              <ul className="space-y-3 text-white/80">
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Before/after photos taken hours apart</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Cherry-picking anecdotal results</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Undisclosed financial incentives</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2" />
                  <span>Attributing success to supplements vs training</span>
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
            <div className="absolute -inset-2 bg-gradient-to-br from-[#ffea00] to-transparent rounded-3xl blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-br from-[#ffea00]/10 to-[#ffea00]/[0.02] rounded-3xl border border-[#ffea00]/30 backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#ffea00]/20 border border-[#ffea00]/50 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-7 h-7 text-[#ffea00]" />
                </motion.div>
                <h3 className="text-2xl text-[#ffea00]">The Economics</h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="bg-black/40 rounded-2xl p-4 border border-[#ffea00]/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Affiliate commission</span>
                    <span className="text-[#ffea00]">10-30%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ffea00] to-[#ff1744]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="bg-black/40 rounded-2xl p-4 border border-[#ffea00]/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Sponsored post value</span>
                    <span className="text-[#ffea00]">$5K-$50K</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ffea00] to-[#ff1744]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ delay: 0.7, duration: 1 }}
                    />
                  </div>
                </motion.div>

                <p className="text-white/60 text-sm italic mt-4">
                  Top influencers earn more from supplement promotions than actual fitness coaching
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
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#ff1744]/20 to-[#ffea00]/20 rounded-3xl border border-[#ff1744]/30 backdrop-blur-xl px-8 py-6">
            <Users className="w-10 h-10 text-[#ff1744] mx-auto mb-4" />
            <p className="text-white/90 max-w-3xl">
              When an influencer promotes a product, ask yourself: Are they sharing science, or selling you something?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
