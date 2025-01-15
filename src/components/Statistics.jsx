/* copied the bg feature from some other repo*/
import { motion } from 'framer-motion';

const stats = [
  { label: 'RACE WINS', value: '12' },
  { label: 'POLE POSITIONS', value: '25' },
  { label: 'PODIUMS', value: '55' },
  { label: 'WORLD CHAMPIONSHIPS', value: '3' },
];

function Statistics() {
  return (
    <section className="py-20 bg-black-10 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-2 text-red-600"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
