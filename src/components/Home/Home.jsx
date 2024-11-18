import React from "react";
import Banner from "../Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  const {servicesData, feedbackData} = useLoaderData();
  


  return (
    <div className=" space-y-24 mb-24">
      <Banner></Banner>
      <div className=" max-w-[1280px] mx-auto ">
        <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
        <div className=" mt-[70px] flex justify-center">
          <Link to='/allTreatments' className="bg-primary px-6 py-4 rounded-full text-white font-semibold">
            Show More
          </Link>
        </div>
        <div className="divider mt-10"></div>
      <Feedback feedbackData={feedbackData}></Feedback>
      </div>
    </div>
  );
};

export default Home;
