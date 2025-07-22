import React from 'react';

const Features = () => {
  const features = [
    'Verified Artisans Only',
    'Client Ratings & Reviews',
    'Personal Portfolio',
  ];

  return (
    <section id="features" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-8">Features</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 shadow rounded bg-gray-50 w-64">
            <p className="font-medium">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
