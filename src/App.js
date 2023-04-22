import Navbar from "./components/navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import FeaturedTours from "./components/FeaturedTours/FeaturedTours";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <FeaturedTours/>
      <Footer></Footer>
    </div>
  );
}

export default App;
