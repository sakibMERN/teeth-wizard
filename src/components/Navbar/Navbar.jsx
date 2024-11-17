import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-full min-h-20 bg-blue-950 text-white text-opacity-85 flex justify-between items-center px-10 ">
      <div>
        <h2 className="text-4xl font-bold">Teeth Wizard</h2>
      </div>
      <div className="flex gap-6 *:text-lg font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments">All Treatments</NavLink>
        <NavLink to="myAppointments">My Appointments</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </div>
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
      
    </div>
  );
};

export default Navbar;
