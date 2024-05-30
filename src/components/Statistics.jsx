// eslint-disable-next-line no-unused-vars
import React from 'react';

function Statistics() {
  return (
    <section id="statistics" className="rounded-3xl bg-orange-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
          <div className="bg-white p-3 rounded-full shadow-md h-40 w-28 md:h-48 md:w-28">
            <h3 className="text-4xl font-bold text-blue-500">85+</h3>
            <p className="text-lg">Award</p>
          </div>
          <div className="bg-white p-3 rounded-full shadow-md h-40 w-28 md:h-48 md:w-28">
            <h3 className="text-4xl font-bold text-red-500">96K</h3>
            <p className="text-lg">Clients</p>
          </div>
          <div className="bg-white p-3 rounded-full shadow-md h-40 w-28 md:h-48 md:w-28">
            <h3 className="text-4xl font-bold text-yellow-500">60+</h3>
            <p className="text-lg">Employees</p>
          </div>
          <div className="bg-white p-3 rounded-full shadow-md h-40 w-28 md:h-48 md:w-28">
            <h3 className="text-4xl font-bold text-teal-500">99%</h3>
            <p className="text-lg">Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
