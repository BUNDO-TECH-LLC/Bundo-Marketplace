import React from 'react';
import { Link } from 'react-router-dom';

const Recommended = () => {
  // Placeholder data - replace with backend data
  const trendingProfiles = [
    {
      id: 1,
      name: 'Amina Hassan',
      location: 'Lagos, Nigeria',
      category: 'Hair Styling',
      rating: 4.9,
      reviewCount: 127,
      image: '/placeholder-profile-1.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦5,000',
      slug: 'amina-hassan'
    },
    {
      id: 2,
      name: 'Fatima Abubakar',
      location: 'Abuja, Nigeria',
      category: 'Fashion Design',
      rating: 4.8,
      reviewCount: 95,
      image: '/placeholder-profile-2.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦15,000',
      slug: 'fatima-abubakar'
    },
    {
      id: 3,
      name: 'Grace Okafor',
      location: 'Port Harcourt, Nigeria',
      category: 'Catering',
      rating: 5.0,
      reviewCount: 203,
      image: '/placeholder-profile-3.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦8,000',
      slug: 'grace-okafor'
    },
    {
      id: 4,
      name: 'Zainab Ibrahim',
      location: 'Kano, Nigeria',
      category: 'Beauty Therapy',
      rating: 4.7,
      reviewCount: 84,
      image: '/placeholder-profile-4.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦3,500',
      slug: 'zainab-ibrahim'
    },
    {
      id: 5,
      name: 'Blessing Adebayo',
      location: 'Ibadan, Nigeria',
      category: 'Event Planning',
      rating: 4.9,
      reviewCount: 156,
      image: '/placeholder-profile-5.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦25,000',
      slug: 'blessing-adebayo'
    },
    {
      id: 6,
      name: 'Maryam Usman',
      location: 'Kaduna, Nigeria',
      category: 'Tailoring',
      rating: 4.8,
      reviewCount: 112,
      image: '/placeholder-profile-6.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦7,500',
      slug: 'maryam-usman'
    },
    {
      id: 7,
      name: 'Hadiza Mohammed',
      location: 'Jos, Nigeria',
      category: 'Photography',
      rating: 4.6,
      reviewCount: 78,
      image: '/placeholder-profile-7.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦12,000',
      slug: 'hadiza-mohammed'
    },
    {
      id: 8,
      name: 'Joy Okwu',
      location: 'Enugu, Nigeria',
      category: 'Makeup Artist',
      rating: 4.9,
      reviewCount: 134,
      image: '/placeholder-profile-8.jpg', // Replace with actual image from backend
      verified: true,
      price: 'From ₦6,500',
      slug: 'joy-okwu'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.floor(rating) 
            ? 'text-yellow-400' 
            : index < rating 
            ? 'text-yellow-300' 
            : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recommended Artisans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top-rated professionals in your area, handpicked based on quality work and customer satisfaction
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {trendingProfiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 hover:border-orange-300"
            >
              {/* Profile Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=Profile+Image';
                  }}
                />
                {profile.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              {/* Profile Details */}
              <div className="p-4">
                {/* Name and Location */}
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {profile.location}
                  </p>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {profile.category}
                  </span>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(profile.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {profile.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({profile.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-orange-600">
                    {profile.price}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-orange-600 text-sm font-medium">
                      View Profile →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/artisans"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Artisans
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recommended;