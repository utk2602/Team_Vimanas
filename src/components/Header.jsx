
import { motion } from 'framer-motion'
import { User, ShoppingBag, Menu, Flag, Clock, Trophy, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

if (typeof document !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
//items appearing in the nav bar and news section
  const navItems = [
    { name: 'RACES', icon: Flag, href: '#race-calendar' },
    { name: 'DRIVERS', icon: User, href: '#driver-standings' },
    { name: 'TEAM', icon: Trophy, href: '#team-section' },
    { name: 'NEWS', icon: Clock, href: '#latest-news' },
    { name: 'HIGHLIGHTS', icon: Play, href: '#race-highlights' },
  ]
  const newsItems = [
    "NEXT RACE: Vellore GRAND PRIX 🏁 - 26 MAY",
    "CURRENT STANDINGS: P5 - 96 POINTS 🏆",
    "LAST RESULT: P3 - Tirupati GRAND PRIX 🏎️",
    "NEW PARTNERSHIP ANNOUNCED 🤝",
  ];
  
//Vimaanas logo with name present on the top left corner of the header , i wrote a lot of tailwind in it 
  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="text-2xl font-bold text-white flex items-center">
            <motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  className="w-8 h-8 rounded-full overflow-hidden mr-2"
>
  <img
    alt="Logo"
    className="w-full h-full object-cover"
  />
</motion.div>
             Team Vimaanas
            </a>
            {/*//nav bar items present in the header with them pointing to their particular sections
*/}
            <nav className="hidden md:flex items-center space-x-6 text-white">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-red/80 hover:text-red transition-colors flex items-center"
                  whileHover={{ y: -2 }}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-red-600 text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
              >
                {/*normal button no context*/}
                RACE DAY LIVE
              </motion.div>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*moving items present in the horizontal bar*/}
      <div className="bg-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center h-10 text-sm overflow-hidden">
            {/*dont know shit about this*/}
            <motion.div 
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
              className="flex items-center space-x-8 whitespace-nowrap"
            >
              {/*content of the moving horizontal bar*/}
              {newsItems.concat(newsItems).map((item, index) => (
                <span key={index} className="inline-block text-black">{item}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
