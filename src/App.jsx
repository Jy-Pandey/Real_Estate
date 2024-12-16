import { useState } from 'react'
import 'aos/dist/aos.css'; // AOS styles import karna zaroori hai
import AOS from 'aos'; // AOS ko initialize karne ke liye import karo
import { useEffect } from 'react'; // useEffect hook use karenge

import './index.css'
import Header from './component/Header';
import About from './component/About';
import HeroSection from './component/HeroSection';
import PopularAreas from './component/PopularAreas';
import Properties from './component/Properties';

function App() {

  //Aos initialization
  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 800, // animation duration in milliseconds
      easing: "ease-in-sine", // easing type
      delay:100,
      // once: true, // animation hoga sirf ek baar
    });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Jai shree Krishna */}
        <Header/>
        <HeroSection/>
        <About/>
        <PopularAreas/>
        <Properties/>
      </div>
    </>
  );
}

export default App
