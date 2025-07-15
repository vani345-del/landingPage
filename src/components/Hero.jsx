
import { Play, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import hero from '../assets/bg1.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
  src={hero}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover object-center z-0"
/>
<div className="absolute inset-0 bg-black/40 z-0"></div>


      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
            Let Your Moves
            <span className="block bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Speak Louder!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join our studio and express yourself through dance. 
            Discover your rhythm, find your passion, and let your spirit soar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200"
              onClick={() => scrollToSection('cta')}
            >
              Book a Free Trial
            </button>
            
            <button 
  className="flex items-center border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200"
  onClick={() => window.open('https://www.youtube.com/watch?v=Ytvpt1LGCy0', '_blank')}
>
  <Play className="w-5 h-5 mr-2" />
  <span>Watch Video</span>
</button>


           <button 
  className="flex items-center bg-green-500 hover:bg-green-600 text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200"
  onClick={() => window.open('https://wa.me/919381416739', '_blank')}
>
  <MessageCircle className="w-5 h-5 mr-2" />
  <span>WhatsApp Us</span>
</button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





