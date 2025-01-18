
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const races = [
  {
    name: 'BAHRAIN GRAND PRIX',
    date: 'MAR 2, 2024',
    time: '10:00 GMT',
    location: 'Bahrain International Circuit',
  },
  {
    name: 'SAUDI ARABIAN GRAND PRIX',
    date: 'MAR 9, 2024',
    time: '18:00 GMT',
    location: 'Jeddah Corniche Circuit',
  },
  {
    name: 'AUSTRALIAN GRAND PRIX',
    date: 'MAR 24, 2024',
    time: '05:00 GMT',
    location: 'Albert Park Circuit',
  },
]

const RaceCalendar = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">RACE CALENDAR</h2>
        <div className="grid gap-6">
          {races.map((race, index) => (
            <motion.div
              key={race.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg border border-white/10 hover:border-red-600 transition-colors"
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <h3 className="text-xl font-bold text-white">{race.name}</h3>
                <div className="flex items-center text-white/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  {race.date}
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-4 h-4 mr-2" />
                  {race.time}
                </div>
                <div className="flex items-center text-white/60">
                  <MapPin className="w-4 h-4 mr-2" />
                  {race.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RaceCalendar
