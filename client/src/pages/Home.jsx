import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for navigation
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-[#121212]">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center mt-16">
        <div className="md:w-1/2 mr-8">
          <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="rounded-lg w-full mt-16 md:mt-16" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-white mt-16">Welcome to the Home Page</h1>
          {/* Add a button to start conversation */}
          <Link to="/inbox" className="w-full mt-9 bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
            Start Conversation
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
