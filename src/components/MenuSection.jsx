const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Clásico Loco",
      description: "Salchicha premium, pan artesanal, mostaza, ketchup, cebolla caramelizada y jalapeños",
      price: "$89",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0R6fzlRj6STzbQpvUw3J8g9yKOPeqZ4xiNdIh"
    },
    {
      id: 2,
      name: "Veggie Delight",
      description: "Salchicha vegetariana, pan integral, guacamole, pico de gallo y germinados",
      price: "$95",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0QYcdiwLhQiykWjlXTqU1cwIADob6V2r5N0P3"
    },
    {
      id: 3,
      name: "Monstruo Picante",
      description: "Doble salchicha, queso cheddar, tocino, jalapeños y nuestra salsa picante secreta",
      price: "$120",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0pFWj6Jr89LiV6g1FsuhvBa0wlA7EzOrDJYMm"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">NUESTROS SABROSOS HOT DOGS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black">{item.name}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-black">{item.price}</span>
                <button className="bg-[#FFC000] text-black px-4 py-2 rounded-full font-medium hover:bg-black hover:text-[#FFC000] transition-colors">
                  Añadir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;