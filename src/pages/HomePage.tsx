import Footer from "../components/sections/V0/Footer";
import FinalCTASection from "../components/sections/V1/FinalCTASection";
import HeroSection from "../components/sections/V1/HeroSection";
import MealsPreviewSection from "../components/sections/V1/MealsPreviewSection";
import OrderingFlowSection from "../components/sections/V1/OrderingFlowSection";
import VisionSection from "../components/sections/V1/VisionSection";


function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection/>
      <OrderingFlowSection/>
      <MealsPreviewSection/>
      <VisionSection/>
      <FinalCTASection/>
      <Footer/>
    </div>
  );
}

export default HomePage;