import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.jpg"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg lg:px-20">
            <div className="navbar-start pb-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/courses" className="justify-between">
                                Courses
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 z-50">
                                <div className='flex gap-x-1'>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>Python</Link></li>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>Java</Link></li>
                                </div>
                                <div className='flex gap-x-1'>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>C</Link></li>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>C++</Link></li>
                                </div>
                                <div className='flex gap-x-1'>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>Go</Link></li>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>Swift</Link></li>
                                </div>
                                <div className='flex gap-x-1'>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>PHP</Link></li>
                                    <li><Link className='btn btn-accent text-base-200 my-1'>Kotlin</Link></li>
                                </div>
                            </ul>
                        </li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About Us</Link></li>
                        <div className="navbar-end lg:hidden">
                            <div className="form-control lg:mr-3">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="toggle toggle-accent" />
                                </label>
                            </div>
                            <Link className="btn">USER</Link>
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
                                <li><Link className='btn btn-accent text-base-200 my-1'>Python</Link></li>
                                <li><Link className='btn btn-accent text-base-200 my-1'>Java</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link className='btn btn-accent text-base-200 my-1'>C</Link></li>
                                <li><Link className='btn btn-accent text-base-200 my-1'>C++</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link className='btn btn-accent text-base-200 my-1'>Go</Link></li>
                                <li><Link className='btn btn-accent text-base-200 my-1'>Swift</Link></li>
                            </div>
                            <div className='flex gap-x-1'>
                                <li><Link className='btn btn-accent text-base-200 my-1'>PHP</Link></li>
                                <li><Link className='btn btn-accent text-base-200 my-1'>Kotlin</Link></li>
                            </div>
                        </ul>
                    </li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control lg:mr-3 lg:block hidden">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle toggle-accent" />
                    </label>
                </div>
                <Link className="btn lg:block hidden">USER</Link>
            </div>
        </div>
    );
};

export default Navbar;