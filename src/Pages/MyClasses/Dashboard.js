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
      <MyClasses />
    </div>
  );
};

export default Dashboard;
