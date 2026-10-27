import AgeBar from './components/AgeBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import ProductGrid from './components/ProductGrid';
import DealBanner from './components/DealBanner'
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App(){
  return (
    <div>
      <AgeBar text="21+ ONLY. VALID ID REQUIRED.[LICENSE NO.]" />
      <Header />
      <Hero tagline="curated for the discerning consumer." />
      <CategoryPills />
      <ProductGrid />
      <DealBanner discount="[DISCOUNT]" category="[CATEGORY]" />
      <HowItWorks />
      <WhyUs />
      <Reviews />
      <VisitUs />
      <NewsLetter />
      <Footer />
    </div>
  )
};
 export default App;