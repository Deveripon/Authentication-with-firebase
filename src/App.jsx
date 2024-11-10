import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route
                            path='/home'
                            element={<Home />}
                        />
                        <Route
                            path='/'
                            element={<Home />}
                            exact
                        />
                    </Route>
                    <Route
                        path='/login'
                        element={<Login />}
                    />
                    <Route
                        path='/reset'
                        element={<Reset />}
                    />
                    <Route
                        path='/register'
                        element={<Register />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
