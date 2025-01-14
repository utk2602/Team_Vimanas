
import { motion } from 'framer-motion'
import { Trophy, Flag, Clock } from 'lucide-react'

const achievements = [
  { icon: Trophy, title: "PODIUM FINISH", description: "P3 at Bengaluru Grand Prix" },
  { icon: Flag, title: "FASTEST LAP", description: "Mohali Grand Prix" },
  { icon: Clock, title: "QUICKEST PIT STOP", description: "1.98 seconds at Jammu" },
]

const LatestAchievements = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">LATEST ACHIEVEMENTS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg border border-white/10 hover:border-red-600 transition-all duration-300 group"
            >
              <achievement.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-white/60">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestAchievements
