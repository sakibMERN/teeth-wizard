import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className=" max-w-[1280px] mx-auto my-24">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
