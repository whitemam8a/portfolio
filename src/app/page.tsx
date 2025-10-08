import AboutMe from '@/sections/AboutMe';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contacts from '@/sections/Contacts';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
      <Footer />
    </>
  );
}
