// eslint-disable-next-line no-unused-vars
import React from 'react';
import catHelpImage1 from '../assets/cat-help1.jpg';
import catHelpImage2 from '../assets/cat-help2.jpg'; 

function HowCanWeHelp() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">How can we help</h2>
      <p className="text-lg mb-10">While you are on vacation or at work can be stressful.</p>
      <div className="flex justify-center lg:justify-around flex-wrap space-x-0 lg:space-x-6">
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <img src={catHelpImage1} alt="Cat Help 1" className="w-48 h-64 lg:w-64 lg:h-80 object-cover rounded-full lg:rounded-3xl shadow-lg mb-4" />
          <p className="text-lg">We take care of your pets like they are our own.</p>
        </div>
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <img src={catHelpImage2} alt="Cat Help 2" className="w-48 h-64 lg:w-64 lg:h-80 object-cover rounded-full lg:rounded-3xl shadow-lg mb-4" />
          <p className="text-lg">Providing love and attention they need.</p>
        </div>
      </div>
    </section>
  );
}

export default HowCanWeHelp;
