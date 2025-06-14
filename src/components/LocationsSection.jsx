import { useState } from 'react';

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "Crazy Hot Dogs La Ballena",
      address: "Carretera del Centro, 112, 35013 Las Palmas de Gran Canaria",
      region: "Gran Canaria",
      phone: "828 90 74 95",
      hours: "Lun-Dom: 10:00 - 23:15",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.506355927719!2d-15.445458023719771!3d28.100596808036048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095b07dc3d9f9%3A0xc9e7a6921a237173!2sCrazy%20Hot%20Dogs!5e0!3m2!1ses!2ses!4v1749810204265!5m2!1ses!2ses",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=28.100710377676283, -15.442861645337121",
      image: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749817478/Web/Crazy_La_Ballena_yrzbw6.jpg"
      
    },
    {
      id: 2,
      name: "Crazy Hot Dogs El Mirador",
      address: "Centro Comercial El Mirador Plata Alta - Local 24A - Telde -",
      region: "Gran Canaria",
      phone: "928 68 68 53",
      hours: "Lun-Sab: 10:00 - 22:00 Domingo: Cerrado",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.738077028109!2d-15.406243123721444!3d28.03248021107497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40bd811f9fcae3%3A0x1752e4976723c48f!2sCrazy%20Hot%20Dogs!5e0!3m2!1ses!2ses!4v1749816033056!5m2!1ses!2ses",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=28.032712229326414, -15.403646745338648",
      image: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749817488/Web/Crazy_Mirador_fxpb6u.jpg"
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#FFC000] tracking-wide" style={{ fontFamily: 'Grobold, sans-serif' }}>
          ENCUÉNTRANOS EN NUESTROS LOCALES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7">
          {locations.map(location => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                selectedLocation.id === location.id
                  ? 'bg-[#FFC000] text-black scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
              <p className="text-sm">{location.address}</p>
              <p className="text-sm">{location.region}</p>
            </button>
          ))}
        </div>

        {selectedLocation && (
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={selectedLocation.image} 
                alt={`Fachada de ${selectedLocation.name}`} 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-[#FFC000]">{selectedLocation.name}</h3>
              <p className="text-lg mb-2">📍 {selectedLocation.address}</p>
              <p className="text-lg mb-2">📞 {selectedLocation.phone}</p>
              <p className="text-lg mb-4">⏰ {selectedLocation.hours}</p>
              <a
              href={selectedLocation.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFC000] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
            >
              COMO LLEGAR
            </a>
            </div>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src={selectedLocation.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationsSection;

// DONE