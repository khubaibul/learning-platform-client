import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG, faUser } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <div>
      {user ? (
        // <div
        //   className={` ${
        //     theme ? "bg-gray-900" : "bg-yellow-400"
        //   } font-sans h-screen w-full flex flex-row justify-center items-center`}
        // >
        //   <div
        //     className={`card w-96 mx-auto ${
        //       theme ? "bg-slate-700 text-slate-300" : "bg-white"
        //     } rounded-none`}
        //   >
        //     <img
        //       className="w-32 mx-auto rounded-full border-8 border-white"
        //       src={user.photoURL}
        //       alt=""
        //     />
        //     <div className="text-center mt-2 text-2xl font-medium font-publicSans">
        //       {user?.displayName}
        //     </div>
        //     {user.email && (
        //       <div className="text-center mt-2 font-light text-sm flex justify-center items-center gap-x-2">
        //         <FontAwesomeIcon icon={faG}></FontAwesomeIcon>
        //         {user?.email}
        //       </div>
        //     )}
        //     <small className="text-center font-semibold text-base">
        //       <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "}
        //       {user?.uid.toUpperCase()}
        //     </small>
        //     <hr className="mt-8" />
        //     <h2 className="text-lg font-semibold font-montserrat text-center">
        //       My Courses
        //     </h2>
        //     {myCourses.length > 0 ? (
        //       <div className="flex flex-col gap-2 p-4">
        //         {myCourses?.map((myCourse) => (
        //           <div className="border border-yellow-400 p-2 flex justify-between items-center">
        //             <h3 className="font-montserrat font-semibold">
        //               {myCourse?.courseName}
        //             </h3>
        //             <h3 className="text-xs">{myCourse?.transactionId}</h3>
        //             {myCourse?.paid === true ? (
        //               <Link
        //                 to={`/myClass/${myCourse?.courseName}`}
        //                 className={`font-semibold rounded-sm p-0.5 text-center hover:bg-opacity-80 active:bg-opacity-100 w-[30%] bg-green-500`}
        //               >
        //                 Go To Class
        //               </Link>
        //             ) : (
        //               <Link
        //                 to="/"
        //                 className={`font-semibold rounded-sm p-0.5 text-center hover:bg-opacity-80 active:bg-opacity-100 w-[30%] bg-red-300`}
        //               >
        //                 Pay Now
        //               </Link>
        //             )}
        //           </div>
        //         ))}
        //       </div>
        //     ) : (
        //       <h4
        //         className={
        //           theme ? "text-center py-5 text-[#EAAAFF]" : "text-center py-5"
        //         }
        //       >
        //         You haven't enrolled any course yet. <br /> Please enroll our{" "}
        //         <Link
        //           to="/courses"
        //           className="text-blue-500 font-semibold italic"
        //         >
        //           courses
        //         </Link>
        //       </h4>
        //     )}
        //     <button
        //       onClick={logOut}
        //       className="btn btn-sm btn-outline btn-accent rounded-none w-[30%] mx-auto mb-4 font-montserrat"
        //     >
        //       Log Out
        //     </button>
        //   </div>
        // </div>
        <div className="grid grid-cols-7 gap-x-10 lg:w-[85%] mx-auto py-10">
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
                Education
              </NavLink>
            </div>
          </div>
          <div className="bg-[#0D0D21] col-span-5 rounded-md">
            <h1>Profile</h1>
            <p>My profile</p>
            <p>Your Data Is </p>
            <div>
              <p>Student ID:</p>
              <p>Full Name:</p>
              <p>Email Address:</p>
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
