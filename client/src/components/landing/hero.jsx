import React from "react";

const Hero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Search triggered");
  };

  return (
    <section className="relative h-[90vh] flex items-end justify-center text-white mx-4 my-8">
      {/* Container with rounded edges */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
        {/* Fallback gradient background if image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/hero-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-orange bg-opacity-40"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center pb-24 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Empowering Women Artisans
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto drop-shadow-md">
          Connect your skills with clients nearby and grow your business.
        </p>
        <a href="/register">
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Join Now
          </button>
        </a>

        {/* Search Bar with integrated button */}
        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for services, skills, or artisans..."
              className="w-full px-6 py-4 pr-20 rounded-full text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;