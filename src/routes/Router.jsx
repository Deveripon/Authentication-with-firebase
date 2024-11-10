import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import Error from "../pages/Error";
import PrivateRoute from "./privateRoutes";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path='*'
                element={<Error />}
            />
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/register'
                element={<Register />}
            />{" "}
            <Route
                path='/reset'
                element={<Reset />}
            />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
