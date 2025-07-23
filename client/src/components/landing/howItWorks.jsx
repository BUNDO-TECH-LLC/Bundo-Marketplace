import React from 'react';
import { Search, Calendar, Star } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting the service you need is simple and straightforward
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Search and Browse */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                <Search className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Search & Browse
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Browse through our curated list of verified service providers. Use filters to find exactly what you need in your area.
            </p>
            <a 
              href="#search" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
            >
              Start Browsing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Step 2: Book Your Service */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Book Your Service
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect directly with service providers, compare quotes, and schedule your appointment at a time that works for you.
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
            >
              View Booking Process
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Step 3: Enjoy and Review */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Enjoy & Review
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enjoy your completed service and share your experience by leaving a review to help other customers make informed decisions.
            </p>
            <a 
              href="#reviews" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
            >
              See Reviews
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="#get-started"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;