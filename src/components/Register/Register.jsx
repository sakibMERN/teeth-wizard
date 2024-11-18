import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const data = useContext(authContext);
  const { handleRegisterWithGoogle, handleRegister, handleUpdateProfile } = data;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, image, email, password);

    handleRegister(email, password)
    .then(()=> {
        handleUpdateProfile(name, image);
        navigate('/');
    })
    .catch(err => {
        console.log(err.code);
    })
  }

  const googleLoginHandler = () => {
    handleRegisterWithGoogle()
    .then(()=> {
        navigate('/');
    })
    .catch(err => {
        console.log(err);
    })
    
  }
  return (
    <div className="my-24">
      <div className="card bg-base-100 w-3/12  mx-auto shrink-0 shadow-2xl px-5">
      <h3 className="text-3xl font-bold text-center mt-5">Register Now</h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-wide block mx-auto">Register</button>
          </div>
        </form>
        <button onClick={googleLoginHandler} className="btn btn-secondary btn-wide block mx-auto">
        Login With Google
      </button>
        <div >
        <p className="text-center mx-8 py-5">Already Registered? Please <Link to={'/login'} className="text-blue-500 underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
