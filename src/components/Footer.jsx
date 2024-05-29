// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer() {
  return (
    <footer className="p-10 bg-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Pet care</h3>
          <p>Opening times: 9am - 6pm</p>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Address</h5>
          <address className="not-italic">
            123 Pet Street<br />
            Pet City, PC 12345<br />
            Email: <a href="mailto:info@petcare.com" className="hover:text-orange-500">info@petcare.com</a><br />
            Phone: <a href="tel:+1234567890" className="hover:text-orange-500">+1 234 567 890</a>
          </address>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#training" className="hover:underline">Training</a></li>
            <li><a href="#mail-care" className="hover:underline">Mail Care</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">How to help</h3>
          <ul>
            <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
            <li><a href="#donate" className="hover:underline">Donate</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-6">© 2024 Pet Care. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
