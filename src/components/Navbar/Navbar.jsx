import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,setUser, handleLogOut} = useContext(authContext);
  const navigate = useNavigate();
 
  console.log(user);

  const logOutHandler = () => {
    
    handleLogOut()
    .then(()=> {
      setUser(null);
      navigate('/')
  })
  .catch(err => {
      console.log(err);
  })
  }
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
        
        {
          user ? (<button onClick={logOutHandler} className="btn btn-warning">LogOut</button>) : (<Link to={'/login'} className="btn btn-primary">Login</Link>)
        }
      </div>
      
    </div>
  );
};

export default Navbar;
