import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./APP/App";
import Login from "./APP/Components/Login/Login";
import SignUp from "./APP/Components/Login/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
