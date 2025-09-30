function Hero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('../public/images/hero-bg.jpg')] bg-cover bg-center pointer-events-none" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-4">
          Welcome to <span className="text-blue-300">Anykeys</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl font-medium opacity-90">
          Discover project, tools and communities build for gamers or content creators!
        </p>
      </div>
    </section>
  );
}

export default Hero;