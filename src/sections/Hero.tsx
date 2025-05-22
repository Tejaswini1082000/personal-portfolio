import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Sai Navya Tejaswini Vemuri
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200">
            Data Analyst & Software Engineer with expertise in backend development, data visualization, and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-400">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;