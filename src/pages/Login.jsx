import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    signinWithEmailAndPassword,
    signInWithGoogle,
} from "../firebase/firebase";

const Login = () => {
    // State to hold the user inputs
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    // Navigate to login page after successful registration
    const navigate = useNavigate();

    // Function to handle form input changes
    function handleChange(e) {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // Function to handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        try {
            const response = await signinWithEmailAndPassword(
                inputs.email,
                inputs.password
            );
            console.dir(response);
            if (response?.uid) {
                navigate("/");
            }
        } catch (error) {
            console.dir(error);
        }
        // Navigate to login page after successful registration
    }

    // manage login with google functionality
    async function loginWithGoogle() {
        try {
            const response = await signInWithGoogle();
            if (response.uid) {
                navigate("/");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    return (
        <div className='register text-center'>
            <h2>Login </h2>
            <div className='registration-form flex justify-center    items-center mt-5'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col w-96 border border-lime-300 p-5 rounded-lg bg-gray-100 *:bg-gray-300 *:mt-2 *:p-2 *:rounded-md *:border-none *:ring-2 *:ring-gray-300 *:focus:ring-lime-300'>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    <button
                        className='!bg-gray-600 text-white'
                        type='submit'>
                        Login
                    </button>
                </form>
            </div>

            <NavLink
                className='text-xs mt-3 underline text-teal-500'
                to='/reset'>
                Forgot Password ?
            </NavLink>
            <br />
            <button
                onClick={loginWithGoogle}
                className='!bg-yellow-500 mt-2 p-2 rounded-full px-7 text-white'>
                Login with Google
            </button>
            <p className='text-xs mt-3'>
                Dont have an Account ?{" "}
                <NavLink
                    className='text-teal-400'
                    to='/register'>
                    Register
                </NavLink>
            </p>
        </div>
    );
};

export default Login;
