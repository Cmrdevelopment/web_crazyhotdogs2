const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "¡Los hot dogs más locos que he probado en mi vida! Cada bocado es una explosión de sabores.",
      author: "Juan Pérez"
    },
    {
      id: 2,
      quote: "Nunca pensé que un hot dog pudiera ser tan gourmet. El Veggie Delight es mi favorito.",
      author: "María Gómez"
    },
    {
      id: 3,
      quote: "La combinación perfecta entre tradición y locura. ¡Volveré por más!",
      author: "Carlos Rodríguez"
    }
  ];

  return (
    <div className="py-16 px-4 bg-[#FFC000]">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">LO QUE DICEN NUESTROS CLIENTES</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-bold text-black">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;