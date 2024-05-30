// eslint-disable-next-line no-unused-vars
import React from 'react';
import catImage1 from '../assets/cat1.jpg'; 
// import catImage2 from '../assets/cat2.jpg'; 
// import catImage3 from '../assets/cat3.jpg';

function Services() {
  return (
    <section id="services" className="p-10 bg-white">
      <div className="flex justify-center">
  <div className="bg-yellow-50 p-6 rounded-lg shadow-md flex items-center w-full max-w-4xl">
    <img src={catImage1} alt="Cat 1" className="w-24 h-48 lg:w-44 lg:h-72 object-cover rounded-t-full rounded-b-full shadow-lg mb-4 mr-8" />
    <div>
    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">How to take care <br></br>____of your pets.</h3>
      <p className="text-sm lg:text-base xl:text-lg text-center lg:text-left">Taking care of pets involves providing proper nutrition, regular exercise, and routine veterinary check-ups. Ensure they have a clean, safe environment and plenty of affection. Groom them regularly, and maintain their mental stimulation through play and social interaction. Always provide fresh water and address their specific health needs.</p>
    </div>
  </div>
</div>
</section>
  );
}

export default Services;


{/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
<img src={catImage2} alt="Dog 1" className="w-full h-60 object-cover rounded-lg mb-4" />
<h3 className="text-xl font-semibold mb-2">Dog Care</h3>
<p>Keep your dog happy and healthy with our expert services.</p>
</div>
<div className="bg-gray-100 p-6 rounded-lg shadow-md">
<img src={catImage3} alt="Small pet" className="w-full h-60 object-cover rounded-lg mb-4" />
<h3 className="text-xl font-semibold mb-2">Small Pets</h3>
<p>Specialized care for your small and exotic pets.</p>
</div> */}