import Navbar from './components/Navbar'
import {ScrollTrigger} from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
     <Navbar/>
    </>
  )
}

export default App;