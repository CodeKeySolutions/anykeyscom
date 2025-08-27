function ProductGrid() {
  const products = [
    { id: 1, type: 'Game', name: 'Bloodbullets.com',url:'https://bloodbullets.com', image: '/images/bloodbullets.jpg',price: '<1000$', description: 'Text-based gangster rpg game' },
    { id: 2, type: 'Community', name:'Keys', url: 'https://discord.gg/VBkGzG8AS9', image: '/images/discord.jpg', price: '<1000$', description: 'Community-driven key' },
      { id: 3, type: 'Tool', name:'Keys', url: 'https://voice.any-keys.com', image: '/images/voice.jpg', price: '<1000$', description: 'Free text-to-speech tool' },
  ];

  return (
    <div className="grid text-center">
        <h2 className="bg-primary-500 text-2xl font-bold">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
      {products.map((product) => (
        <div key={product.id} className="card bg-primary-500 shadow-xl">
          <div className="card-body">
            {product.image && <img src={product.image} alt={product.name} />}
            <p className="text-sm text-red-500">Type :{product.type}</p>
            <h2 className="card-title">Name: {product.name}</h2>
            Visit  <a href={product.url} className="text-primary-300 hover:underline">
              {product.url}
            </a>
            <p>About: {product.description}</p>
            {/* <p className="text-lg font-bold">{product.price}</p> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
export default ProductGrid;