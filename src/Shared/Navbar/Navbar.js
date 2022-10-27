import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.jpg"
import noUser from "../../Assets/user.png"
import darkMode from "../../Assets/dark-mode.png";
import lightMode from "../../Assets/light-mode.png";

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, theme, setTheme } = useContext(AuthContext);
    console.log(user);
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme(true)
        }
        else if (!e.target.checked) {
            setTheme(false)
        }
    }
    return (
        <div className={`navbar ${theme && "bg-gray-800 text-gray-300"} bg-base-100 shadow-lg lg:px-20`}>
            <div className="navbar-start pb-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`${theme ? "bg-gray-900 text-gray-300" : "bg-base-100"} font-bold menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52`}>
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/courses" className="justify-between">
                                Courses
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 z-50">
                                <li><Link to="/course/1" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Python</Link></li>
                                <li><Link to="/course/2" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Java</Link></li>
                                <li><Link to="/course/3" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>C</Link></li>
                                <li><Link to="/course/4" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>C++</Link></li>
                                <li><Link to="/course/5" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Go</Link></li>
                                <li><Link to="/course/6" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Swift</Link></li>
                                <li><Link to="/course/7" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>PHP</Link></li>
                                <li><Link to="/course/8" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Kotlin</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <div className="navbar-end lg:hidden">
                            <div className="form-control lg:mr-3">
                                <label className="label cursor-pointer">
                                    {
                                        theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                            : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                    }
                                    <input onChange={handleToggle} type="checkbox" className="toggle toggle-secondary" />
                                </label>
                            </div>
                            <div>
                                {
                                    user ?
                                        <Link to="/user" className="rounded-full">
                                            {
                                                user.photoURL ? <div className="tooltip tooltip-right" data-tip={user.displayName}>
                                                    <img className='w-10 rounded-full p-1 bg-accent' src={user.photoURL} alt="User" />
                                                </div>
                                                    : <img className='w-10' src={noUser} alt="User" />
                                            }
                                        </Link>
                                        : <div>
                                            <Link to="/signup" className='btn btn-sm mb-2 rounded-none'>Sign Up</Link>
                                            <Link to="/login" className='btn btn-sm mb-2 rounded-none'>Login</Link>
                                        </div>
                                }
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='flex items-center text-2xl font-bold gap-x-4'>
                    <Link to="/" className="normal-case text-xl"><img className='w-16 rounded-full' src={logo} alt="" /></Link>
                    <h2 className='lg:text-3xl text-sm'>CSE FROM HOME</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="/courses">
                            Courses
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 z-50">
                            <div className='flex gap-x-1'>
                                <li><Link to="/course/1" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Python</Link></li>
                                <li><Link to="/course/2" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Java</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link to="/course/3" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>C</Link></li>
                                <li><Link to="/course/4" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>C++</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link to="/course/5" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Go</Link></li>
                                <li><Link to="/course/6" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Swift</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link to="/course/7" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>PHP</Link></li>
                                <li><Link to="/course/8" className='btn btn-sm rounded-none btn-accent text-base-200 my-1'>Kotlin</Link></li>
                            </div>
                        </ul>
                    </li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control lg:mr-3 lg:block hidden">
                    <label className="label cursor-pointer">
                        {
                            theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                                : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                        }
                        <input onChange={handleToggle} type="checkbox" className="toggle toggle-accent" />
                    </label>
                </div>
                <div className='hidden lg:block'>
                    {
                        user ?
                            <Link to="/user" className="lg:block hidden">
                                {
                                    user.photoURL ? <div>
                                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                            <img className='w-14 rounded-full p-1 bg-accent' src={user.photoURL} alt="User" />
                                        </div>
                                    </div>

                                        : <img className='w-14' src={noUser} alt="User" />
                                }
                            </Link>
                            : <div>
                                <Link to="/signup" className='btn btn-sm mr-2 rounded-none'>Sign Up</Link>
                                <Link to="/login" className='btn btn-sm mr-2 rounded-none'>Login</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;