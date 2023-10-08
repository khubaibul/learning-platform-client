import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import noUser from "../../Assets/user.png";
import darkMode from "../../Assets/dark-mode.png";
import lightMode from "../../Assets/light-mode.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [courses, setCourses] = useState([]);
  const { user, theme, setTheme } = useContext(AuthContext);

  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "4px solid #9D1B6F" : "",
      color: isActive ? "#9D1B6F" : "",
    };
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme(true);
    } else if (!e.target.checked) {
      setTheme(false);
    }
  };

  useEffect(() => {
    fetch("https://cse-from-home-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, []);

  return (
    <div
      className={`navbar ${
        theme && "bg-gray-800 text-gray-300"
      } bg-base-100 shadow-lg lg:px-20`}
    >
      <div className="navbar-start pb-4 !w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`${
              theme ? "bg-gray-900 text-gray-300" : "bg-base-100"
            } font-bold font-montserrat menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52`}
          >
            <li className="rounded-none">
              <NavLink
                to="/home"
                className="bg-transparent !rounded-none"
                style={navLinkStyle}
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/courses"
                className="justify-between bg-transparent !rounded-none"
                style={navLinkStyle}
              >
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2 z-50">
                {courses?.map((course) => (
                  <li>
                    <Link
                      to={`/course/${course._id}`}
                      className="btn btn-sm rounded-none btn-accent text-base-200 my-1 font-montserrat"
                    >
                      {course.courseTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <NavLink
                to="/faq"
                className="bg-transparent !rounded-none"
                style={navLinkStyle}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="bg-transparent !rounded-none"
                style={navLinkStyle}
              >
                About Us
              </NavLink>
            </li>
            <div className="navbar-end lg:hidden">
              <div className="form-control lg:mr-3">
                <label className="label cursor-pointer">
                  {theme ? (
                    <img
                      src={lightMode}
                      className="label-text w-7 mr-1"
                      alt="/mode"
                    ></img>
                  ) : (
                    <img
                      src={darkMode}
                      className="label-text w-7 mr-1"
                      alt="/mode"
                    ></img>
                  )}
                  <input
                    onChange={handleToggle}
                    type="checkbox"
                    className="toggle toggle-secondary"
                  />
                </label>
              </div>
              <div>
                {user ? (
                  <NavLink
                    to="/user"
                    className="rounded-full"
                    style={navLinkStyle}
                  >
                    {user.photoURL ? (
                      <div
                        className="tooltip tooltip-right"
                        data-tip={user.displayName}
                      >
                        <img
                          className="w-10 rounded-full p-1 bg-accent"
                          src={user.photoURL}
                          alt="User"
                        />
                      </div>
                    ) : (
                      <img className="w-10" src={noUser} alt="User" />
                    )}
                  </NavLink>
                ) : (
                  <div>
                    <NavLink
                      to="/signup"
                      className="btn btn-sm mb-2 !rounded-none"
                      style={navLinkStyle}
                    >
                      Sign Up
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="btn btn-sm mb-2 !rounded-none"
                      style={navLinkStyle}
                    >
                      Login
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} className="w-64 hidden lg:block md:block" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold font-montserrat">
          <li>
            <NavLink
              to="/home"
              className="bg-transparent !rounded-none"
              style={navLinkStyle}
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              to="/courses"
              className="bg-transparent !rounded-none"
              style={navLinkStyle}
            >
              Courses
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="z-50">
              <div className="grid grid-cols-2 gap-1">
                {courses?.map((course) => (
                  <li>
                    <Link
                      to={`/course/${course._id}`}
                      className="btn btn-sm !rounded-none btn-accent text-base-200 "
                    >
                      {course.courseTitle}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="bg-transparent !rounded-none"
              style={navLinkStyle}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="bg-transparent !rounded-none"
              style={navLinkStyle}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control lg:mr-3 lg:block hidden">
          <label className="label cursor-pointer">
            {theme ? (
              <img
                src={lightMode}
                className="label-text w-7 mr-1"
                alt="/mode"
              ></img>
            ) : (
              <img
                src={darkMode}
                className="label-text w-7 mr-1"
                alt="/mode"
              ></img>
            )}
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle toggle-accent"
            />
          </label>
        </div>
        <div className="hidden lg:block">
          {user ? (
            <NavLink
              to="/user"
              className="lg:block hidden bg-transparent !rounded-none"
              style={navLinkStyle}
            >
              {user.photoURL ? (
                <div>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      className="w-14 rounded-full p-1 bg-accent"
                      src={user.photoURL}
                      alt="User"
                    />
                  </div>
                </div>
              ) : (
                <img className="w-14" src={noUser} alt="User" />
              )}
            </NavLink>
          ) : (
            <div>
              <NavLink
                to="/signup"
                className="btn btn-sm mr-2 rounded-none !rounded-none"
                style={navLinkStyle}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="btn btn-sm mr-2 rounded-none !rounded-none"
                style={navLinkStyle}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
