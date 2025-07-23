import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h3 className="text-xl font-bold">Bundo Marketplace</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted platform connecting customers with verified service providers. Find quality services in your area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.346 2.115-2.193-.772.342-1.597.574-2.465.68z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Browse Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Cleaning Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Home Repairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Beauty & Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Tutoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Event Planning</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Support Ticket</a></li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Contact Info</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <p>📧 support@bundomarketplace.com</p>
                <p>📞 +234 (0) 123 456 7890</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bundo Marketplace. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;