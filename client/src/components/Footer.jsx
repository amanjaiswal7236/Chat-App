import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
          
          <div>
            <a href="" className="flex items-center gap-2">
              <img src="\icons8-snow-app.svg" alt="logo" className="h-6" />
              <span className="text-xl font-extrabold">Chat App</span>
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Get Help?</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><BsGithub /></a>
              <a href="#" className="hover:text-gray-300"><BsInstagram /></a>
              <a href="#" className="hover:text-gray-300"><BsTwitter /></a>
              <a href="#" className="hover:text-gray-300"><BsFacebook /></a>
              <a href="#" className="hover:text-gray-300"><BsDribbble /></a>
            </div>
            <div className="mt-4">
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-600" />
        <div className="text-center">
          <p className="text-sm">&copy; Chat-App™ {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
