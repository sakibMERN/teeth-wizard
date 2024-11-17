import React from "react";
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="hero w-11/12 min-h-[600px] max-w-[1320px] mx-auto bg-blue-200 mt-16 rounded-[32px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        className="lg:w-6/12 h-[470px] object-cover rounded-2xl"
          src={banner}
        />
        <div>
          <h1 className="text-5xl font-bold ">Your Ultimate Dental Care Companion!</h1>
          <p className="py-6">
          Teeth Wizard is your trusted destination for exceptional dental care. We specialize in creating brighter, healthier smiles through cutting-edge treatments and personalized attention. Our mission is to deliver comfort, confidence, and excellence in oral health for every patient.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
