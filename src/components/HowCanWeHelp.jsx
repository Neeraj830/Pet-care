// eslint-disable-next-line no-unused-vars
import React from 'react';
import catHelpImage1 from '../assets/cat-help1.jpg';
import catHelpImage2 from '../assets/cat-help2.jpg'; 

function HowCanWeHelp() {
  return (
    <section className="flex items-center justify-center h-screen bg-white-50 text-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6">
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6 lg:mb-0">
          <img src={catHelpImage1} alt="Cat Help 1" className="w-full h-full object-cover rounded-full shadow-lg" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-4 h-4 lg:w-6 lg:h-6"></button>
        </div>
        
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <p className="text-lg font-bold text-indigo-950 mb-10 lg:mb-4">How can we help</p>
          <p className="text-lg font-semibold text-indigo-950 hidden lg:block">While you are on vacation or at work can be stressful.</p>
        </div>

        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6 lg:mb-0">
          <img src={catHelpImage2} alt="Cat Help 2" className="w-full h-full object-cover rounded-full shadow-lg" />
          <span className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-full lg:text-sm lg:px-2">See Stories</span>
        </div>
        
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6 lg:mb-0">
          <img src={catHelpImage1} alt="Cat Help 1" className="w-full h-full object-cover rounded-full shadow-lg" />
          <span className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-full lg:text-sm lg:px-2">See Stories</span>
        </div>
      </div>
    </section>
  );
}

export default HowCanWeHelp;
