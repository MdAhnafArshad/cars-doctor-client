
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/login/Login";
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
        }
      ],
    },
  ]);

export default router;