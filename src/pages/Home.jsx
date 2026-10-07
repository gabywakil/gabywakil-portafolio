import Hero from '../components/sections/Hero';
import MarqueeTape from '../components/sections/MarqueeTape';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Belt from '../components/sections/Belt';
import Projects from '../components/sections/Projects';
import OutlineBand from '../components/sections/OutlineBand';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTape />
      <About />
      <Skills />
      <Belt />
      <Projects />
      <OutlineBand />
      <Testimonials />
      <Contact />
    </>
  );
}
