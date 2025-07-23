import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCategories = () => {
  const categories = [
    {
      id: 'construction',
      name: 'Construction',
      description: 'Building, renovation & repair',
      icon: '🏗️',
      slug: 'construction'
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      description: 'Water systems & pipe repair',
      icon: '🔧',
      slug: 'plumbing'
    },
    {
      id: 'electrical',
      name: 'Electrical',
      description: 'Wiring & electrical installations',
      icon: '⚡',
      slug: 'electrical'
    },
    {
      id: 'carpentry',
      name: 'Carpentry',
      description: 'Woodwork & furniture making',
      icon: '🪚',
      slug: 'carpentry'
    },
    {
      id: 'painting',
      name: 'Painting',
      description: 'Interior & exterior painting',
      icon: '🎨',
      slug: 'painting'
    },
    {
      id: 'cleaning',
      name: 'Cleaning',
      description: 'Home & office cleaning services',
      icon: '🧹',
      slug: 'cleaning'
    },
    {
      id: 'gardening',
      name: 'Gardening',
      description: 'Landscaping & garden maintenance',
      icon: '🌱',
      slug: 'gardening'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      description: 'Car repair & maintenance',
      icon: '🚗',
      slug: 'automotive'
    }
  ];

  return (
    <section id="browse-categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find skilled artisans across various categories to meet all your service needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-200 hover:border-orange-300"
            >
              {/* Category Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              {/* Category Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>
              
              {/* Category Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {category.description}
              </p>

              {/* Hover Effect Indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-orange-600 text-sm font-medium">
                  View Services →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;