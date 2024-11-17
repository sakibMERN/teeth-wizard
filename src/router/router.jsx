import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/myAppointments',
                element: <MyAppointments></MyAppointments>
            }
        ]
    }
])

export default router;