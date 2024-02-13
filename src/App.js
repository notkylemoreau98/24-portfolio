import './App.css';
import Header from './components/Header';
import About from './components/Home/About';
import Hero from './components/Home/Hero';
// import Projects from './components/Home/Projects';
import Skills from './components/Home/Skills';
import Contact from './components/Home/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <main className=''>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}

export default App;
