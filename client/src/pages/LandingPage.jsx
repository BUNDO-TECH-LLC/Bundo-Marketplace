import React, { useEffect } from "react";

// Landing page sections
//import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Bundo Marketplace - Empowering Women Artisans";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Join Bundo Marketplace and connect with skilled women artisans in your area. Subscribe for visibility and grow your handmade business.'
      );
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
     
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;



// import React from 'react'

// const LandingPage = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Bundo Marketplace</h1>
//       <p>Empowering Women, Connecting Skills to Clients Nearby</p>
//       <a href="/login"><button>Get Started</button></a>
//     </div>
//   )
// }

// export default LandingPage

