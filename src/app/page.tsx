import AboutMe from '@/sections/AboutMe';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
