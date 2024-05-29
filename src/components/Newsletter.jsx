import React from 'react';

function Newsletter() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe Newsletter & get Pet.care News</h2>
      <form className="flex justify-center mt-4">
        <input type="email" placeholder="Enter your email address" className="p-3 border border-gray-300 rounded-l-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        <button className="px-6 py-3 bg-orange-500 text-white rounded-r-lg">Subscribe Now</button>
      </form>
    </section>
  );
}

export default Newsletter;
