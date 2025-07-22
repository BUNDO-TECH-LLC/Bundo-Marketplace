import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-orange-600 text-white text-center">
      <h3 className="text-3xl font-semibold mb-4">Ready to showcase your skills?</h3>
      <a href="/register">
        <button className="bg-white text-orange-600 px-6 py-2 rounded hover:bg-gray-200">
          Join Bundo Today
        </button>
      </a>
    </section>
  );
};

export default CTA;
