import React from "react";

// First Name
// Last Name
// Email(Logined in user email)
// Phone Number.
// Appoinment date
// address
// make appointment button

const Modal = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h2 className="text-center text-2xl font-bold mb-6">Appointment Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="First Name"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="date"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <button className="btn btn-primary" type="submit">Make Appointment</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
