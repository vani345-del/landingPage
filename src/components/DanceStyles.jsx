import { useEffect, useState } from 'react';

const danceStyles = [
  {
    name: 'Hip-Hop',
    description: 'Urban beats, street style energy',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-400 to-pink-500'
  },
  {
    name: 'Zumba',
    description: 'Fitness meets fun dance moves',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-green-400 to-blue-500'
  },
  {
    name: 'Contemporary',
    description: 'Expressive and fluid movements',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Bharatanatyam',
    description: 'Classical Indian dance tradition',
    image: 'https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Salsa',
    description: 'Latin rhythms and passionate moves',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-red-400 to-pink-500'
  },
  {
    name: 'Ballet',
    description: 'Grace, technique, and elegance',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-400 to-purple-500'
  }
];

const DanceStyles = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.dance-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="styles" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-4">
            Dance <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Styles</span>
          </h2>
          <p className="text-xl text-white-600 max-w-2xl mx-auto">
            From street-style hip-hop to classical ballet, find your perfect rhythm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {danceStyles.map((style, index) => (
            <div
              key={style.name}
              data-index={index}
              className={`dance-card group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 cursor-pointer ${
                visibleCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-100 transform transition-all duration-300 group-hover:translate-y-0 translate-y-4 group-hover:opacity-100 opacity-90">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceStyles;
