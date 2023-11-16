import React, { useContext } from "react";
import MyClasses from "./MyClasses";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user, theme } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="w-[80%] mx-auto mb-28">
      <h1
        className={`text-center mt-16 mb-10 font-montserrat text-2xl font-bold tracking-wider ${
          theme ? "text-slate-300" : " text-gray-900"
        }`}
      >
        Welcome Back{" "}
        <span className="italic font-extrabold bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text">
          {user?.displayName}
        </span>
        , Ready For Your Next Lesson?
      </h1>

      <div className="grid grid-cols-5 gap-x-5 mb-10">
        <div className="col-span-4 bg-gradient-to-r from-purple-800 via-accent to-purple-400 p-[3px] rounded-lg">
          <div className="bg-gradient-to-l from-[#1B0B30] to-[#1e0f4b] p-8 rounded-lg h-full">
            p
          </div>
        </div>
        <div className="col-span-1 bg-gradient-to-l from-[#1B0B30] to-[#1e0f4b] py-8 px-2 rounded-lg flex flex-col justify-center items-center gap-4 border-violet-800 border-4">
          <h4 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text font-montserrat font-bold text-xl">
            Your Performance
          </h4>
          <div
            className="radial-progress  text-accent font-montserrat font-semibold"
            style={{
              "--value": "90",
              "--size": "10rem",
              "--thickness": "1.5rem",
            }}
            role="progressbar"
          >
            90%
          </div>
        </div>
      </div>

      <MyClasses />
    </div>
  );
};

export default Dashboard;
