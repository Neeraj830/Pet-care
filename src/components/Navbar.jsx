// eslint-disable-next-line no-unused-vars
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg p-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Pet Care</div>
      <ul className="flex space-x-8 text-lg">
        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
        <li><a href="#services" className="hover:text-orange-500">Services</a></li>
        <li><a href="#training" className="hover:text-orange-500">Training</a></li>
        <li><a href="#medi-care" className="hover:text-orange-500">Medi-care</a></li>
      </ul>
      <div>
        <a href="#signup" className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
