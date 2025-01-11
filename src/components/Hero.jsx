
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return React.createElement(
    'div',
    { className: 'pt-32 pb-20 relative overflow-hidden' },
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8 },
        className: 'absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20 z-0',
      }
    ),
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.2 },
        className: 'absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full filter blur-3xl opacity-40 z-0',
      }
    ),
    React.createElement(
      'div',
      { className: 'relative z-10' },
      React.createElement(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: 'text-7xl font-bold mb-6 leading-none',
        },
        'RACING',
        React.createElement('br'),
        'REDEFINED'
      ),
      React.createElement(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: 'text-lg text-white/80 mb-8 max-w-lg',
        },
        'Experience the thrill of Formula 1 with Williams Racing. Join us as we push the boundaries of speed and innovation.'
      ),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.4 },
          className: 'flex space-x-4',
        },
        React.createElement(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            className: 'bg-red-600 text-white px-8 py-3 text-sm font-medium rounded-full hover:bg-red-700 transition-colors flex items-center',
          },
          'EXPLORE OUR TEAM',
          React.createElement(ArrowRight, { className: 'w-4 h-4 ml-2' })
        ),
        React.createElement(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            className: 'bg-transparent border border-white px-8 py-3 text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors',
          },
          'RACE CALENDAR'
        )
      )
    )
  )
}

export default Hero
