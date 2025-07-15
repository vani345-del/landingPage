import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Dna } from 'lucide-react';
import DanceStyles from '../components/DanceStyles';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const LandingPage = () => {
     useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
   <>
   <Navbar/>
   <Hero/>
   <DanceStyles/>
   <About/>
   <Gallery/>
   <Testimonials/>
   <CallToAction/>
   <Footer/>
   </>
  )
}

export default LandingPage