import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUp } from "../firebase/firebase";

const Register = () => {
    // State to hold the user inputs
    const [inputs, setInputs] = useState({
        username: "",
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
            const response = await signUp(inputs.email, inputs.password);
            console.dir(response);
            if (response?.uid) {
                navigate("/login", { replace: true });
            }
        } catch (error) {
            console.dir(error);
        }
        // Navigate to login page after successful registration
    }

    return (
        <div className='register text-center'>
            <h2>Register </h2>
            <div className='registration-form flex justify-center    items-center mt-5'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col w-96 border border-lime-300 p-5 rounded-lg bg-gray-100 *:bg-gray-300 *:mt-2 *:p-2 *:rounded-md *:border-none *:ring-2 *:ring-gray-300 *:focus:ring-lime-300'>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={inputs.username}
                        onChange={handleChange}
                    />
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
                        Register
                    </button>
                </form>
            </div>
            <p className='text-xs mt-3'>
                Allready have an account ?{" "}
                <NavLink
                    className='text-teal-400'
                    to='/login'>
                    Login
                </NavLink>
            </p>
        </div>
    );
};

export default Register;
