
import { createBrowserRouter } from "react-router-dom";
import Booking from "../pages/Home/Booking/Booking";
import Checkout from "../pages/Home/CheckOut/CheckOut";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ErrorPage from "../pages/shared/404/ErrorPage";
import PrivateRout from "./PrivateRout";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
          path:"checkout/:id",
          element: <PrivateRout><Checkout></Checkout></PrivateRout>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path:"/booking",
          element: <PrivateRout><Booking></Booking></PrivateRout>,

        }
      ],
    },
  ]);

export default router;