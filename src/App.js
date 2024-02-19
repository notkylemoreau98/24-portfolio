import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/Home/About';
import Hero from './components/Home/Hero';
// import Projects from './components/Home/Projects';
import Skills from './components/Home/Skills';
import Contact from './components/Home/Contact';
import Experience from './components/Experience';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let prevSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          prevSection = section.id;
        }
      });

      setActiveSection(prevSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className=''>
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
