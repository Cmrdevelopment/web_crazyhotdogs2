import { useEffect, useState } from 'react';

const splashImages = [
  {
    type: 'ketchup',
    url: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749930979/Web/Mancha_de_tomate_V2_reduced_sin_fondo_eh7bni.png"
  },
  {
    type: 'ketchup',
    url: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749916007/Web/Mancha_de_tomate_sin_fondo_reduced_hs80kn.png"
  },
  {
    type: 'mostaza',
    url: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749925484/Web/Mancha_de_Mostaza_sin_fondo_reduced_juik5d.png"
  },
  {
    type: 'mostaza',
    url: "https://res.cloudinary.com/dssm2bf0j/image/upload/v1749931306/Web/Mancha_de_mostaza_V2_reduced_sin_fondo_v9paip.png"
  }
];

const getRandomSplash = () => {
  const randomSplash = splashImages[Math.floor(Math.random() * splashImages.length)];
  return {
    top: `${Math.random() * 90}vh`,
    left: `${Math.random() * 90}vw`,
    size: `${40 + Math.random() * 80}px`,
    rotation: `${Math.random() * 360}deg`,
    id: crypto.randomUUID(),
    ...randomSplash
  };
};

const KetchupSplash = () => {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const splash = getRandomSplash();
      setSplashes(prev => [...prev, splash]);

      setTimeout(() => {
        setSplashes(prev => prev.filter(s => s.id !== splash.id));
      }, 5000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {splashes.map((splash) => (
        <img
          key={splash.id}
          src={splash.url}
          alt={`${splash.type} splash`}
          className="absolute opacity-80 animate-ketchup select-none"
          style={{
            top: splash.top,
            left: splash.left,
            width: splash.size,
            height: splash.size,
            transform: `rotate(${splash.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

export default KetchupSplash;
