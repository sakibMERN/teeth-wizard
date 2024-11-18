
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const data = useContext(authContext);
    const {  handleSignIn, handleRegisterWithGoogle } = data;
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
  
      handleSignIn(email, password)
      .then((res)=> {
        ;
        if (!location.state || !location.state.from) {
            navigate('/'); // Navigate to home route if no redirect path is provided
        } else {
            navigate(location.state.from); // Navigate to the intended route
        }
            
        
      })
      .catch(err => {
        console.log(err);
      })
    }


    //google login
    const googleLoginHandler = () => {
        handleRegisterWithGoogle()
        .then((res)=> {
            ;
            if (!location.state || !location.state.from) {
                navigate('/'); // Navigate to home route if no redirect path is provided
            } else {
                navigate(location.state.from); // Navigate to the intended route
            }
                
            
          })
          .catch(err => {
            console.log(err);
          })
    }
  return (
    <div >
      <div className="card bg-base-100 w-4/12 mx-auto shrink-0 shadow-2xl my-24">
      <h2 className="text-center text-3xl font-bold pt-6">Login Now</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        
      <p className="text-center p-5">
        New to this website? Please{" "}
        <Link className="text-blue-500 underline" to={"/register"}>
          Register
        </Link>
      </p>
      <button onClick={googleLoginHandler} className="btn btn-secondary btn-wide block mx-auto mb-5">
        Login With Google
      </button>
      </div>


      
    </div>
  );
};

export default Login;
