import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 dark:bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            @ShadowDxD
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['hero', 'about', 'skills', 'projects', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize font-medium hover:glow"
              >
                {section}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-cyan-400 hover:text-cyan-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-cyan-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-cyan-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-900/95 rounded-lg backdrop-blur-md">
            {['hero', 'about', 'skills', 'projects', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;