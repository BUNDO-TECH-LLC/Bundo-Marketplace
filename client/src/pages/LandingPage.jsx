import React, { useEffect } from "react";

// Landing page sections
//import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import BrowseCategories from "@/components/landing/browseCategories";
import HowItWorks from "@/components/landing/HowItWorks";
import Recommended from "@/components/landing/recommended";
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
      <BrowseCategories />
      <HowItWorks />
      <Recommended />
      <Footer />
    </div>
  );
};

export default LandingPage;