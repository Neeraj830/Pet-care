// eslint-disable-next-line no-unused-vars
import React from 'react';

function Statistics() {
  return (
    <section id="statistics" className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-orange-500">1500+</h3>
            <p className="text-lg">Happy Clients</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-orange-500">120+</h3>
            <p className="text-lg">Qualified Employees</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-orange-500">2000+</h3>
            <p className="text-lg">Pets Cared For</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
