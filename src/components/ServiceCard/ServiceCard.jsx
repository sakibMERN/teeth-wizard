import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {treatment, image, description, cost, id} = service;
  
  return (
    <div className="card bg-base-100 max-w-96 shadow-xl">
      <figure className="h-[213px]">
        <img
            className="h-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}!
          <div className="badge badge-secondary">${cost}</div>
        </h2>
        <p title={description}>{description.slice(0, 200)}...</p>
        <div className="card-actions justify-end">
          
          <Link to={`/details/${id}`} className="badge badge-outline bg-primary text-white font-semibold p-4">Checkout More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
