import Section from '../components/Section';
import { Download } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  return (
    <Section id="about" title="About Me" className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {/* Primary orb */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob opacity-30"></div>
        {/* Secondary orb */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000 opacity-30"></div>
        {/* Accent orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000 opacity-30"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg mb-6 leading-relaxed text-gray-100">
            I'm a data-driven software engineer and analyst with a passion for turning complex data into actionable insights. With experience spanning data analysis, backend development, and machine learning, I bring a versatile skill set to solve challenging technical problems.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed text-gray-100">
            My background at Infosys Limited provided me with strong foundations in backend development using Java and Spring, where I contributed to the Marriott Vacations Worldwide project, developing and maintaining microservices and RESTful APIs.
          </p>
          
          <Button className="mt-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-500/25 transition-all duration-500">
            <Download className="mr-2" size={18} />
            Download Resume
          </Button>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-300 blur-sm"></div>
            <div className="absolute inset-[3px] bg-black rounded-full overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src="src/assets/image.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;