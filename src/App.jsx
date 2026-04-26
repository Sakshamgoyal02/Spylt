import Navbar from './components/Navbar'
import {ScrollSmoother, ScrollTrigger} from 'gsap/all';
import gsap from 'gsap';
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
     ScrollSmoother.create({
      smooth: 3,
      effects: true,
     });
  });

  return (
    <>
     <Navbar/>
     <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <HeroSection/>
        <MessageSection/>
        <FlavorSection/>
      </div>
     </div>
    
    </>
  )
}

export default App;