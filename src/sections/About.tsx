import Section from '../components/Section';
import { Download } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  return (
    <Section id="about" title="About my background" className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg mb-6 leading-relaxed text-gray-300">
            I'm a data-driven software engineer and analyst with a passion for turning complex data into actionable insights. With experience spanning data analysis, backend development, and machine learning, I bring a versatile skill set to solve challenging technical problems.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed text-gray-300">
            My background at Infosys Limited provided me with strong foundations in backend development using Java and Spring, where I contributed to the Marriott Vacations Worldwide project, developing and maintaining microservices and RESTful APIs.
          </p>
          
          <Button className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-500">
            <Download className="mr-2" size={18} />
            Download Resume
          </Button>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            <div className="absolute inset-2 bg-gray-800 rounded-full overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src="src/assets/image.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;