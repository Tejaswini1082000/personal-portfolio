import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCursor from './components/AnimatedCursor';
import SectionDivider from './components/SectionDivider';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
          {/* Scroll Progress Indicator */}
          <ScrollProgress showPercentage={true} />

          {/* Custom Cursor */}
          <AnimatedCursor />

          {/* Interactive Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Primary gradient orb */}
            <div
              className="absolute transition-transform duration-300 ease-out"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.05) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {/* Secondary gradient orb */}
            <div
              className="absolute transition-transform duration-500 ease-out"
              style={{
                right: `${100 - mousePosition.x}%`,
                bottom: `${100 - mousePosition.y}%`,
                transform: 'translate(50%, 50%)',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {/* Accent gradient orb */}
            <div
              className="absolute transition-transform duration-700 ease-out"
              style={{
                left: `${mousePosition.y}%`,
                bottom: `${mousePosition.x}%`,
                transform: 'translate(-50%, 50%)',
                width: '35vw',
                height: '35vw',
                background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.03) 40%, transparent 70%)',
                filter: 'blur(25px)',
              }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            {/* Subtle noise texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Header scrolled={scrolled} />
            <main className="pt-16">
              <Hero />
              <SectionDivider variant="wave" fillColor="fill-white dark:fill-gray-900" />
              <About />
              <SectionDivider variant="curve" fillColor="fill-white dark:fill-gray-900" />
              <Experience />
              <SectionDivider variant="triangle" fillColor="fill-white dark:fill-gray-900" />
              <Skills />
              <SectionDivider variant="zigzag" fillColor="fill-white dark:fill-gray-900" />
              <Projects />
              <SectionDivider variant="wave" fillColor="fill-white dark:fill-gray-900" />
              <Education />
              <SectionDivider variant="curve" fillColor="fill-white dark:fill-gray-900" />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;