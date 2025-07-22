import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-orange-50 text-center">
      <h3 className="text-3xl font-semibold mb-8">Simple Pricing</h3>
      <div className="p-8 bg-white shadow rounded max-w-sm mx-auto">
        <h4 className="text-xl font-bold mb-4">₦1,000 / Month</h4>
        <p className="mb-4">Get listed, receive client inquiries, and build your portfolio.</p>
        <a href="/register">
          <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-500">
            Subscribe
          </button>
        </a>
      </div>
    </section>
  );
};

export default Pricing;
