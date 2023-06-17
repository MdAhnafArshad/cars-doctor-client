
import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Home/CheckOut/CheckOut";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ErrorPage from "../pages/shared/404/ErrorPage";



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
          element: <Checkout></Checkout>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        }
      ],
    },
  ]);

export default router;