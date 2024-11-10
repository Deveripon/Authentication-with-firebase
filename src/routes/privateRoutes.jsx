// PrivateRoute.js

import { Navigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
const PrivateRoute = ({ children }) => {
    const { user } = useAuthState(auth);

    return user?.uid ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
