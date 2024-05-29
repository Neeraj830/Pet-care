// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import userImage from '../assets/User-photo.jpeg'

function Testimonial() {
  return (
    <section className="p-10 bg-gradient-to-r from-green-100 to-blue-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Your furry friend is in Safe Hands</h2>
      <p className="mb-4">This is my favourite Pet care agency. They always provide the best service.</p>
      <div className="flex justify-center items-center space-x-4">
        <img src={userImage} alt="Testimonial" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
        <div>
          <h4 className="text-xl font-semibold">Neeraj Patel</h4>
          <p>Pet Owner</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
