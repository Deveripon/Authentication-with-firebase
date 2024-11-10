import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    //manage logout functionality
    function handleLogout() {
        signOut(auth)
            .then(() => {
                navigate("/login", { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div>Home</div>
            <h3>Welcome {user?.email}</h3>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Home;
