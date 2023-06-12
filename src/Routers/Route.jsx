
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
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
      ],
    },
  ]);

export default router;