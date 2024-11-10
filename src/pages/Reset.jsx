import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendpasswordResetEmail } from "../firebase/firebase";

const Reset = () => {
    // State to hold the user inputs
    const [email, setEmail] = useState("");
    // Navigate to login page after successful registration

    // Function to handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        try {
            const response = await sendpasswordResetEmail(email);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        // Navigate to login page after successful registration
    }

    return (
        <div className='register text-center'>
            <h2>Reset Password </h2>
            <div className='registration-form flex justify-center    items-center mt-5'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col w-96 border border-lime-300 p-5 rounded-lg bg-gray-100 *:bg-gray-300 *:mt-2 *:p-2 *:rounded-md *:border-none *:ring-2 *:ring-gray-300 *:focus:ring-lime-300'>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className='!bg-gray-600 text-white'
                        type='submit'>
                        Send Reset Link
                    </button>
                </form>
            </div>
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

export default Reset;
