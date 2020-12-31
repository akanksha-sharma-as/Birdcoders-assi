import './App.css';
import Header from './components/Header';
import Info1 from './components/Info1';
import Info2 from './components/Info2';
import Info3 from './components/Info3';
import Info4 from './components/Info4';
// import CarouselSlider from './components/CarouselSlider';
import Info5 from './components/Info5';
import Card from './components/Card';
import Team from "./components/Team";
import Review from "./components/Review";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
// import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <>
    <div className="bg-1">
    <Header />
    <Info1 />
    </div>
    <div className="bg-2">
    <Info2 />
    </div>
    <div className="bg-3">
    <Info3 />
    </div>
    <div className="bg-4">
    <Info4 />
    </div>
    {/* <CarouselSlider /> 
    React-slick & slick-carousel is not getting download on my system*/}
    <Info5 />
    <Card />
    <Team />
    <Review />
    <CTA />
    <div className="bg">
    <Footer />
    </div>
    </>
  );
}