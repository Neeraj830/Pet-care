// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowCanWeHelp from './components/HowCanWeHelp'; 
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowCanWeHelp /> 
        <Services />
        <Statistics/>
        <Services />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
