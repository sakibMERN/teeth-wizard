import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";


const Details = () => {
  const singleDataDetails = useLoaderData();
  const { cost, treatment, description, image } = singleDataDetails;
  console.log(singleDataDetails);
  return (
    <div
      className="hero  max-w-[1280px] mx-auto my-24 min-h-[600px] "
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
          <p className="mb-5">
            {description}
          </p>
          <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
