import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG, faUser, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const UserProfile = () => {
  const { user, logOut, theme } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [user?.email]);

  console.log(myCourses);

  return (
    <div>
      {user ? (
        <div className="lg:grid md:grid grid-cols-7 gap-x-10 lg:w-[85%] mx-auto py-6">
          <div className="flex flex-col gap-y-10 bg-[#0D0D21] col-span-2 rounded-md p-6">
            <div className="flex flex-col gap-y-4">
              <div>
                <div className="flex justify-end">
                  <button className="text-end w-6 h-6 rounded-full flex justify-center items-center border-2 border-[#A12350] text-[#A12350] font-semibold font-publicSans">
                    i
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={user?.photoURL} className="w-20 h-20" alt="" />
              </div>
              <div className="flex justify-center">
                <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium  font-publicSans tracking-widest py-1 px-5 text-[#f25189] rounded-sm  transition-all duration-300">
                  Application
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 font-publicSans font-semibold text-slate-300">
              <NavLink className="bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                My Profile
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Additional Info
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Address
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Education
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Skill Set
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Course Request
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Order History
              </NavLink>
              <NavLink className="hover:bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2 rounded">
                Certification
              </NavLink>
            </div>
          </div>
          <div className="bg-[#0D0D21] col-span-5 rounded-md p-6">
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-3xl font-publicSans font-extrabold text-slate-300">
                  My Profile
                </h1>
                <button className="flex justify-center items-center text-accent gap-x-1 font-bold">
                  <FaEdit />
                  Edit
                </button>
              </div>
              <div className="p-10 flex gap-x-20 lg:flex-row">
                <div className="flex flex-col gap-y-3">
                  <img className="w-36 h-36" src={user?.photoURL} alt="" />
                  <button className="bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] hover:to-[#DC3DF4] hover:from-[#4C58FE] py-1 px-4 rounded font-publicSans text-slate-300">
                    Edit Profile
                  </button>
                </div>
                <div className="text-slate-300 font-publicSans flex flex-col gap-y-4">
                  <div>
                    <h5 className="text-sm">Student ID:</h5>
                    <span>WEB6-2001</span>
                  </div>
                  <div>
                    <h5 className="text-sm">Full Name</h5>
                    <span>{user?.displayName}</span>
                  </div>
                  <div>
                    <h5 className="text-sm">Email Address</h5>
                    <span>{user?.email}</span>
                  </div>
                  <div>
                    <h5 className="text-sm">Phone</h5>
                    <span>+8801832302170</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-publicSans font-extrabold text-slate-300">
                My Course
              </h1>
              <table className="table-normal w-full text-slate-300 mt-4">
                <thead className="font-montserrat bg-gradient-to-r from-[#DC3DF4] via-[#984AF9] to-[#4C58FE] p-2">
                  <tr>
                    <th>Course Name</th>
                    <th>Course ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myCourses?.map((myCourse, i) => (
                    <tr className="font-montserrat text-center bg-gradient-to-r from-[#1C1730] to-[#171930]">
                      <td className="text-lg font-bold">
                        {myCourse?.courseName}
                      </td>
                      <td className="text-sm font-semibold">
                        {myCourse?.transactionId}
                      </td>
                      <td>
                        {myCourse?.paid ? (
                          <button className="bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium  font-publicSans tracking-widest py-1 px-5 text-[#f25189] rounded-sm  transition-all duration-300">
                            Enrolled ✅
                          </button>
                        ) : (
                          <button className="bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium  font-publicSans tracking-widest py-1 px-5 text-[#f25189] rounded-sm  transition-all duration-300">
                            Enroll ❎
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2
            className={`${
              theme
                ? "text-center text-[#EAAAFF] my-56 text-xl"
                : "text-center my-56 text-xl"
            }`}
          >
            Your Are Not Logged In. Please
            <Link to="/login" className="underline-offset-4 underline">
              {" "}
              Login
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
