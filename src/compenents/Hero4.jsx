import React from "react";
import backgroundImage from './assets/pictures/SeaverBackground.webp';

const Hero4 = () => {


  return (
    <div
      className="relative bg-black overflow-hidden "
      style={{ height: "35vh" }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-transparent to-green-600 opacity-75"></div>
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Text Container */}
      <div className="relative z-9 flex flex-col items-center justify-center h-full p-4 text-center font-bold">
  <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          Reach More Customers
    <br />
  </h2>
  <hr className="border-t-2 border-gray-300 w-3/4 my-4" />
  <h3 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
  Seaver Marketing Group
 </h3>

       
      </div>
    </div>
  );
};

export default Hero4;
