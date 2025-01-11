
import { motion } from 'framer-motion'
import { User, ShoppingBag, Menu, Flag, Clock, Trophy, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

if (typeof document !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'RACES', icon: Flag, href: '#race-calendar' },
    { name: 'DRIVERS', icon: User, href: '#driver-standings' },
    { name: 'TEAM', icon: Trophy, href: '#team-section' },
    { name: 'NEWS', icon: Clock, href: '#latest-news' },
    { name: 'HIGHLIGHTS', icon: Play, href: '#race-highlights' },
  ]

  const newsItems = [
    "NEXT RACE: MONACO GRAND PRIX - 26 MAY",
    "CURRENT STANDINGS: P5 - 96 POINTS",
    "LAST RESULT: P3 - SPANISH GRAND PRIX",
    "NEW PARTNERSHIP ANNOUNCED",
  ]

  return React.createElement(
    'header', 
    { className: 'fixed w-full z-50 bg-black/90 backdrop-blur-sm' },
    React.createElement(
      'div', 
      { className: 'border-b border-white/10' },
      React.createElement(
        'div', 
        { className: 'container mx-auto px-4' },
        React.createElement(
          'div', 
          { className: 'flex items-center justify-between h-20' },
          React.createElement(
            Link, 
            { href: '/', className: 'text-2xl font-bold text-white flex items-center' },
            React.createElement(
              motion.div,
              {
                initial: { rotate: 0 },
                animate: { rotate: 360 },
                transition: { duration: 2, repeat: Infinity, ease: "linear" },
                className: 'w-8 h-8 bg-red-600 rounded-full mr-2'
              }
            ),
            'WILLIAMS RACING'
          ),
          React.createElement(
            'nav', 
            { className: 'hidden md:flex items-center space-x-6' },
            navItems.map((item) => 
              React.createElement(
                motion.a, 
                {
                  key: item.name,
                  href: item.href,
                  className: 'text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center',
                  whileHover: { y: -2 }
                },
                React.createElement(item.icon, { className: 'w-4 h-4 mr-2' }),
                item.name
              )
            )
          ),
          React.createElement(
            'div', 
            { className: 'flex items-center space-x-4' },
            React.createElement(
              motion.div,
              {
                whileHover: { scale: 1.1 },
                className: 'bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer'
              },
              'RACE DAY LIVE'
            ),
            React.createElement(
              'button', 
              { className: 'md:hidden', onClick: () => setIsMenuOpen(!isMenuOpen) },
              React.createElement(Menu, { className: 'w-6 h-6' })
            )
          )
        )
      )
    ),
    React.createElement(
      'div', 
      { className: 'bg-red-600 overflow-hidden' },
      React.createElement(
        'div', 
        { className: 'container mx-auto px-4 relative' },
        React.createElement(
          'div', 
          { className: 'flex items-center h-10 text-sm overflow-hidden' },
          React.createElement(
            motion.div,
            {
              animate: {
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              },
              className: 'flex items-center space-x-8 whitespace-nowrap'
            },
            newsItems.concat(newsItems).map((item, index) => 
              React.createElement('span', { key: index, className: 'inline-block' }, item)
            )
          )
        )
      )
    )
  )
}

export default Header
