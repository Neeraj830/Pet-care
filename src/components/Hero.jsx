// eslint-disable-next-line no-unused-vars
import React from 'react';
import catImage1 from '../assets/cat1.jpg'; 
import catImage2 from '../assets/cat2.jpg'; 

function Hero() {
  return (
    <section className="bg-gradient-to-r from-white-100 to-pink-100 p-10 flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
      <div className="mb-10 lg:mb-0 lg:mr-10">
        <h1 className="text-4xl text-indigo-950 font-bold mb-4">Care of your Little pets.</h1>
        <p className="text-lg  mb-6">We believe finding a reliable, professional pet sitter should be easy. We are a family of pet lovers.</p>
        <div className="flex justify-center lg:justify-start">
          <button className="px-6 py-3 bg-orange-500 text-white rounded mr-4">Our Services</button>
          <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded">Schedule a Call</button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 space-x-6">
      <img src={catImage1} alt="Cat 1" className="w-full h-auto lg:w-64 lg:h-96 object-cover rounded-t-full rounded-b-full shadow-lg" />
      <img src={catImage2} alt="Cat 2" className="w-48 h-84 lg:w-48 lg:h-72 object-cover rounded-t-full rounded-b-full shadow-lg" />

      </div>
    </section>
  );
}

export default Hero;
