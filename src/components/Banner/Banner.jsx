import React from "react";
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="hero w-11/12 min-h-[600px] max-w-[1280px] mx-auto bg-blue-200 mt-16 rounded-[32px]">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse px-10">
        <img
        className="lg:w-5/12 h-[500px] object-cover rounded-2xl"
          src={banner}
        />
        <div className="w-6/12">
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
