import Hero from "./components/Hero";
import Header from "./components/Header";
import LatestAchievements from "./components/LatestAchievements";
import VideoFeature from "./components/Video-feature";
import LatestNews from "./components/LatestNews";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const App = () => {/*used chatgpt to align the hero section wasnt able to do it on my own , i will try to work more on alignment rn*/
  return (
    <main>
      {/* Header and Hero Section */}
      <div
        className="relative h-screen bg-[url('https://as2.ftcdn.net/v2/jpg/03/54/63/09/1000_F_354630944_VCsohMGh5Gnik1fXnSFBlnLYpZ9pcHKx.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
        <Header />
        <div className="relative z-10 h-full flex items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="container mx-auto px-4 py-12">
        <LatestAchievements />
        <Statistics />
        <LatestNews />
        <Newsletter />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default App;
