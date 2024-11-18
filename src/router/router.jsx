import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("/happyClients.json");
          console.log(feedbackRes);
          const feedbackData = await feedbackRes.json();
          console.log(feedbackData);

          return { servicesData, feedbackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async (params)=> {
            const res = await fetch("/service.json");
            const data = await res.json();
            const singleDataDetails = data.find(data => data.id === Number(params.params.id));
            
            return singleDataDetails;
        }
      }
    ],
  },
]);

export default router;
