import { MessageCircle, Phone, Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Dance 
          <span className="block text-yellow-300">
            with Us?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards your dance journey. Book your free trial class today 
          and discover the dancer within you!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-10 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl rounded-lg flex items-center"
            onClick={() => window.open('tel:+1234567890', '_self')}
          >
            <Phone className="w-6 h-6 mr-3" />
            Call Now: +91 9381416739
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-xl px-10 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl rounded-lg flex items-center text-white"
            onClick={() => window.open('https://wa.me/919381416739?text=Hi! I want to book a free trial dance class.', '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            WhatsApp Us
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Calendar className="w-6 h-6 mr-2" />
            Free Trial Includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>1-hour trial class</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Personal consultation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Studio tour</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Skill assessment</span>
            </div>
          </div>
        </div>

        <p className="text-lg mt-8 text-gray-200">
          No commitment required • All skill levels welcome • Flexible scheduling
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
