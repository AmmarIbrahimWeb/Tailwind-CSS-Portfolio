import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/Ammar.png)] bg-cover data-aos="zoom-in-up"'
      style={{backgroundSize: "35%", backgroundPosition: "left 230px top 100px"}}
    >
      <Navbar />  

      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Left section: Empty for now */}
        <div className="hidden lg:block"></div>

        {/* Right section: Text with centering */}
        <div className="text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Hafiz Muhammad</p>
            <p data-aos="zoom-in-up">Ammar Ibrahim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
