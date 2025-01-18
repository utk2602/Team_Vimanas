
import { motion } from 'framer-motion';

const drivers = [
  { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 170 },
  { position: 2, name: 'Sergio Perez', team: 'Red Bull Racing', points: 155 },
  { position: 3, name: 'Fernando Alonso', team: 'Aston Martin', points: 137 },
  { position: 4, name: 'Lewis Hamilton', team: 'Mercedes', points: 121 },
  { position: 5, name: 'Carlos Sainz', team: 'Ferrari', points: 83 },
];

function DriverStandings() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">DRIVER STANDINGS</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-4 pr-4">POS</th>
                <th className="pb-4 pr-4">DRIVER</th>
                <th className="pb-4 pr-4">TEAM</th>
                <th className="pb-4">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, index) => (
                <motion.tr
                  key={driver.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 pr-4">{driver.position}</td>
                  <td className="py-4 pr-4 font-semibold">{driver.name}</td>
                  <td className="py-4 pr-4 text-white/60">{driver.team}</td>
                  <td className="py-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                      {driver.points}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DriverStandings;
