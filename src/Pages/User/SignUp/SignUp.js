import React, { useContext, useState } from 'react';
import email from "../../../Assets/email.png";
import photo from "../../../Assets/photo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext);

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/profile";


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userPhotoURL = form.photoURL.value;
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        if (userPassword.length < 6) {
            setErr("Password should be more than 6 character...")
            return;
        }
        createUser(userEmail, userPassword)
            .then(result => {
                // toast.success("User Created Successfully");
                handleUpdateUserProfile(userName, userPhotoURL);
                handleEmailVerification();
                if (result.user.emailVerified === true) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Your Email Isn't Verified. Please Verify Your Email.")
                }
                form.reset();
            })
            .catch(err => toast.error(err.message.slice(10)));
    }

    const handleTermsAndConditions = e => {
        setAccepted(e.target.checked);
    }


    const handleUpdateUserProfile = (userName, userPhotoURL) => {
        const profile = {
            displayName: userName,
            photoURL: userPhotoURL
        }
        updateUserProfile(profile)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.error(err))
    }

    const handleEmailVerification = () => {
        emailVerify()
            .then(result => {

            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center pt-14">
            <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </div>
                <form onSubmit={handleSignUp} className="p-12 md:p-24">
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                        </svg>
                        <input type="text"
                            name="name"
                            required="required"
                            id="name" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username Full Name" />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <img className="absolute ml-3" width="24" viewBox="0 0 24 24" src={photo} alt="" />
                        <input type="text"
                            name="photoURL" required="required"
                            id="photoURL" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Photo URL" />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <img className="absolute ml-3" width="24" viewBox="0 0 24 24" src={email} alt="" />
                        <input type="email"
                            name="email"
                            required="required"
                            id="email" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                        </svg>
                        <input type="password" id="password"
                            name="password" required="required"
                            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input
                                    onClick={handleTermsAndConditions}
                                    type="checkbox" className="checkbox" />
                                <span className="label-text">Accept Terms & Conditions</span>
                            </label>
                        </div>
                        <p className='text-right mb-1'><Link className='underline underline-offset-4' to="login">Login</Link></p>
                    </div>
                    <button
                        disabled={!accepted}
                        className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;