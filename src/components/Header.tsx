import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div
          className="text-lg font-semibold cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          onClick={() => scrollToSection('hero')}
        >
          Sai Navya Vemuri
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <span
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer relative group"
            >
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </span>
          ))}

          <div className="flex items-center space-x-4">
            {[
              { icon: Github, href: 'https://github.com/Tejaswini1082000', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/tejaswini-navya-vemuri-968939346/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tejunavya0427@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transform hover:scale-110 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <span
            onClick={() => scrollToSection('about')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            About
          </span>
          <span
            onClick={() => scrollToSection('experience')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Experience
          </span>
          <span
            onClick={() => scrollToSection('skills')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Skills
          </span>
          <span
            onClick={() => scrollToSection('projects')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Projects
          </span>
          <span
            onClick={() => scrollToSection('education')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Education
          </span>
          <span
            onClick={() => scrollToSection('contact')}
            className="py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </span>

          <div className="flex items-center space-x-4 py-2">
            <a href="https://github.com/Tejaswini1082000" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tejaswini-navya-vemuri-968939346/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tejunavya0427@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;