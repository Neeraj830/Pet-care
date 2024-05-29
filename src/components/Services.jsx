// eslint-disable-next-line no-unused-vars
import React from 'react';
import catImage1 from '../assets/cat1.jpg'; 
import catImage2 from '../assets/cat2.jpg'; 
import catImage3 from '../assets/cat3.jpg';

function Services() {
  return (
    <section id="services" className="p-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img src={catImage1} alt="Cat 1" className="w-full h-60 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cat Care</h3>
          <p>Professional care for your feline friends while you are away.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img src={catImage2} alt="Dog 1" className="w-full h-60 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dog Care</h3>
          <p>Keep your dog happy and healthy with our expert services.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img src={catImage3} alt="Small pet" className="w-full h-60 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Small Pets</h3>
          <p>Specialized care for your small and exotic pets.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
