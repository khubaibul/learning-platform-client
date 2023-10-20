import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
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
        <div
          className={` ${
            theme ? "bg-gray-900" : "bg-yellow-400"
          } font-sans h-screen w-full flex flex-row justify-center items-center`}
        >
          <div
            className={`card w-96 mx-auto ${
              theme ? "bg-slate-700 text-slate-300" : "bg-white"
            } rounded-none`}
          >
            <img
              className="w-32 mx-auto rounded-full border-8 border-white"
              src={user.photoURL}
              alt=""
            />
            <div className="text-center mt-2 text-2xl font-medium font-montserrat">
              {user?.displayName}
            </div>
            {user.email && (
              <div className="text-center mt-2 font-light text-sm">
                <FontAwesomeIcon icon={faG}></FontAwesomeIcon>
                {user?.email}
              </div>
            )}
            <small className="text-center font-semibold text-base">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "}
              {user?.uid.toUpperCase()}
            </small>
            <hr className="mt-8" />
            <h2 className="text-lg font-semibold font-montserrat text-center">
              My Courses
            </h2>
            {myCourses.length > 0 ? (
              <div className="flex flex-col gap-2 p-4">
                {myCourses?.map((myCourse) => (
                  <div className="border border-yellow-400 p-2 flex justify-between items-center">
                    <h3 className="font-montserrat font-semibold">
                      {myCourse?.courseName}
                    </h3>
                    <h3 className="text-xs">{myCourse?.transactionId}</h3>
                    <button
                      className={`font-semibold rounded-sm p-0.5 text-center hover:bg-opacity-80 active:bg-opacity-100 w-[30%] ${
                        myCourse?.paid ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {myCourse?.paid ? "Go To Class" : "Pay Now"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <h4 className="text-center py-5">
                You haven't enrolled any course yet. <br /> Please enroll our{" "}
                <Link
                  to="/courses"
                  className="text-blue-500 font-semibold italic"
                >
                  courses
                </Link>
              </h4>
            )}
            <button
              onClick={logOut}
              className="btn btn-sm btn-outline btn-accent rounded-none w-[30%] mx-auto mb-4 font-montserrat"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="my-56 text-center text-xl ">
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
