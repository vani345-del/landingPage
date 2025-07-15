import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              ASK{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                DANCE
              </span>{' '}
              <span className={`${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>STUDIO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'styles', 'about', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    isScrolled
                      ? 'text-gray-900 hover:text-pink-500'
                      : 'text-white hover:text-pink-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`border px-4 py-2 rounded-md transition ${
                isScrolled
                  ? 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-pink-500'
              }`}
              onClick={() => window.open('https://wa.me/919381416739', '_blank')}
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2" />
              WhatsApp
            </button>
            <button
              className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition"
              onClick={() => scrollToSection('cta')}
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'styles', 'about', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block px-3 py-2 text-gray-900 hover:text-pink-500 w-full text-left capitalize"
              >
                {section}
              </button>
            ))}

            <div className="px-3 py-2 space-y-2">
              <button
                className="w-full border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-4 h-4 inline-block mr-2" />
                WhatsApp
              </button>
              <button
                className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition"
                onClick={() => scrollToSection('cta')}
              >
                Book Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

