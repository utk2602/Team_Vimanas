
import { motion } from 'framer-motion';

const news = [
  {
    title: "Vimaanas to Unveil 2025 Challenger on Valentine's Day",
    category: "NEWS",
    image:"https://i.pinimg.com/736x/64/24/b3/6424b39c00b9db4b032f124c641e8081.jpg",
    date: "2 MINS AGO",
  },
  {
    title: "Can you challenge the leaders on Circuit Breaker?",
    category: "GAMING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5hSkcOD8E8VacP1VXoDD9fyFEYdhOQQyzg&s",
    date: "5 MINS AGO",
  },
  {
    title: "WATCH: Dharsaan amarnath , Day One - UNSEEN FOOTAGE",
    category: "VIDEO",
    image: "https://as1.ftcdn.net/jpg/05/51/92/38/1000_F_551923874_Gl4ntf3JD0XLDofCDjH5gDlJfWdeCcfQ.webp",
    date: "Yesterday",
  },
];

const LatestNews = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white ">LATEST</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 px-2 py-1 text-xs text-white  font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-600">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">{item.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
