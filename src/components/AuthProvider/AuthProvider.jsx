import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";



export const authContext = createContext();

const AuthProvider = ({ children }) => {
  //user state
  const [user, setUser] = useState(null);

  //Loading state
  const [loading, setLoading] = useState(true);

  //google provider
  const provider = new GoogleAuthProvider();


  //Register with email & password
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email & password
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update profile
  const handleUpdateProfile =(name, image) => {
    updateProfile(auth.currentUser , {displayName:name, photoURL: image})
    .then((user) => {
        console.log(user);
    })
    .catch(err => {
        console.log(err);
    })
  }

  //Logout
  const handleLogOut = () => {
    return signOut(auth)
    
    
  };

  //Register with google
  const handleRegisterWithGoogle = () => {

    return signInWithPopup(auth, provider);
  };


   //State change observer
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        if(currentUser){
            setUser(currentUser);
        }
        else{
            setUser(null);
        }
        setLoading(false);
        return ()=> {
            unsubscribe();
        }
    });
  }, []);

  const authInfo = {
    handleRegister,
    handleSignIn,
    handleRegisterWithGoogle,
    handleLogOut,
    user,
    setUser,
    handleUpdateProfile,
    loading, 
    setLoading
    
  };

 



  return (
    <div>
      <authContext.Provider value={authInfo}>         
        {children}

      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
