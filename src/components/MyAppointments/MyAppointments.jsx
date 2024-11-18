import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(authContext);
  const [localSavedData, setLocalSavedData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("appointments");
    let savedData = [];
    if (localData) {
      savedData = JSON.parse(localData);
    }
    const userData = savedData.filter((data) => data.email === user?.email);
    console.log(userData);
    setLocalSavedData(userData);
  }, []);
  return <div>My APPOINTMENT</div>;
};

export default MyAppointments;
