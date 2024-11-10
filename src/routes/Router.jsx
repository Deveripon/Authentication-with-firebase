import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
        path: "/reset",
        element: <Reset />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
