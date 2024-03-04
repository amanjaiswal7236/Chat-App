import React from 'react';
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
          <p className="text-lg text-white mb-4 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ex id mi consequat fringilla. Sed quis sapien vel enim maximus vestibulum. 
            Nulla consectetur velit vel nisi condimentum luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Phasellus feugiat lorem id velit vehicula consequat. Duis vestibulum eleifend mi, a rhoncus quam mattis a. Fusce vehicula, tortor nec varius 
            scelerisque, or nec varius 
            scelerisque, libero purus vehicula ligula, ut mollis nisi mi a libero. Ut pretium ultricies nisl, nec volutpat dui rhoncus or nec varius 
            scelerisque, libero purus vehicula ligula, ut mollis nisi mi a libero. Ut pretium ultricies nisl, nec volutpat dui rhoncus nec. nec. libero purus vehicula ligula, ut mollis nisi mi a libero. Ut pretium ultricies nisl, nec volutpat dui rhoncus nec.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
