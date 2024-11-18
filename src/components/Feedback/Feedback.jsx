import React from "react";

const Feedback = ({ feedbackData }) => {
  console.log(feedbackData);
  const { name, review, userImg } = feedbackData;
  return (
      <div className="mt-16">
        <h2 className="text-5xl font-bold text-center mb-10">Customer Feedback</h2>
         <div className="grid grid-cols-4 gap-6 mt-24">
      {feedbackData.map((feedback) => (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="shadow-md rounded-xl flex justify-center items-center p-3">
              <img
                src={feedback.userImg}
                className="w-32 h-32 object-cover rounded-full"
                alt=""
              />
              <h2 className="card-title p-3">{feedback.name}</h2>
            </div>
            <p>{feedback.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Feedback;
