
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 pl-7 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full filter blur-3xl opacity-40 z-0"
      />
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-6 leading-none text-white pt-8 "
        >
          RACING
          <br />
          REDEFINED
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/80 mb-8 max-w-lg"
        >
          Experience the thrill of Formula 1 with{' '}
          <span className="text-red-600 font-semibold">Team Vimaanas</span>. Join us as we push the boundaries of speed and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 text-white px-8 py-3 text-sm font-medium rounded-full hover:bg-red-700 transition-colors flex items-center"
          >
            EXPLORE OUR TEAM
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-transparent border border-white px-8 py-3 text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors"
          >
            RACE CALENDAR
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
