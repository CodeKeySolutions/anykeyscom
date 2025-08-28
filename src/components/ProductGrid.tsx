function ProductGrid() {
  const products = [
    { id: 1, type: 'Game', name: 'Bloodbullets.com',url:'https://bloodbullets.com', image: '/images/bloodbullets.jpg',price: '<1000$', description: 'Text-based gangster rpg game' },
    { id: 2, type: 'Community', name:'Keys', url: 'https://discord.gg/VBkGzG8AS9', image: '/images/discord.jpg', price: '<1000$', description: 'Community-driven key' },
      { id: 3, type: 'Tool', name:'Text to Speech', url: 'https://voice.any-keys.com', image: '/images/voice.jpg', price: '<1000$', description: 'Free text-to-speech tool' },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col overflow-hidden"
            >
              {product.image && (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block text-xs font-semibold text-blue-500 uppercase mb-2">{product.type}</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductGrid;