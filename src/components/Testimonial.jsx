// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import userImage from '../assets/User-photo.jpeg';

function Testimonial() {
  return (
    <section className="p-10 bg-orange-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">This is my favourite Pet care agency.</h2>
          <p className="text-gray-700 mb-6">
            The only place I will leave my little girl when I go away. The only issue is she does not want to come home because she is having so much fun. The best part is the accessibility to the staff and pictures on Facebook of playtime. I could not feel more confident in who is taking care of my pup while being out of town.
          </p>
          <h4 className="text-xl font-semibold">Neeraj Patel</h4>
          <p className="text-gray-500">CEO, AcmeInc</p>
        </div>
        <div className="lg:w-1/2 flex justify-center">

            <img src={userImage} alt="Testimonial" className="w-full h-auto lg:w-64 lg:h-96 object-cover rounded-t-full rounded-b-full shadow-lg" />
          </div>
        </div>
    </section>
  );
}

export default Testimonial;
