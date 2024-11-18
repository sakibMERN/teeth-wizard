import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

// First Name
// Last Name
// Email(Logined in user email)
// Phone Number.
// Appoinment date
// address
// make appointment button

const Modal = ({treatment}) => {

  const {user} = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        const fName = e.target.fName.value;
        const lName = e.target.lName.value;
        const email = e.target.email.value;
        const pNumber = e.target.pNumber.value;
        const address = e.target.address.value;
        const treatmentTitle = treatment;

        const info = {
          fName,
          lName,
          email:user.email,
          pNumber,
          address,
          treatmentTitle
        }

        let saveData = [];
        const localData = localStorage.getItem('appointments');
        if(localData){
          saveData = JSON.parse(localData);
        }
        saveData.push(info);
        localStorage.setItem('appointments', JSON.stringify(saveData));
    }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h2 className="text-center text-2xl font-bold mb-6">Appointment Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            required
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user?.email}
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            type="text"
            name="pNumber"
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
            name="address"
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
