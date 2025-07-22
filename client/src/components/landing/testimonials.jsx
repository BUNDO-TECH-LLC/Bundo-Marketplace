import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-8">What Our Users Say</h3>
      <div className="space-y-6 max-w-2xl mx-auto">
        <blockquote className="italic">
          “Bundo helped me find consistent clients in my area. My business has grown so much!”
        </blockquote>
        <p className="font-bold">– Amina, Hairdresser</p>
      </div>
    </section>
  );
};

export default Testimonials;
