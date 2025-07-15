import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              ASK DANCE<span className="text-gray-400">STUDIO</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Inspiring movement, building confidence, and creating lifelong memories through the art of dance. 
              Join our community and let your passion shine.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ask_dance_studio/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/watch?v=Ytvpt1LGCy0" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919381416739" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-pink-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('styles')} className="text-gray-300 hover:text-pink-400 transition-colors">
                  Dance Styles
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-pink-400 transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Dance Street, Arts District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="tel:+919381416739" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 9381416739
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="mailto:info@dancestudio.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@dancestudio.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Studio Hours</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Mon - Fri: 4:00 PM - 10:00 PM</div>
                <div>Sat - Sun: 9:00 AM - 8:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Dance Studio. All rights reserved. Made with ❤️ for dancers.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
