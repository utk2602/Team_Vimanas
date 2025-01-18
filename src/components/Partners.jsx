
import { motion } from 'framer-motion'

const Partners = () => {
  // Array representing partners' logos
  const partners = Array(6).fill('/placeholder.svg?height=80&width=160')

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">OUR PARTNERS</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black p-4 rounded-lg flex items-center justify-center w-40 h-20"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="max-w-full h-auto opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
