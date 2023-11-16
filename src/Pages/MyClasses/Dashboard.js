import React, { useContext } from "react";
import MyClasses from "./MyClasses";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import courseBrandImage from "../../Assets/course_banner.jpg";

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
            <img
              className="h-56 w-96 rounded-md"
              src={courseBrandImage}
              alt=""
            />
            <div className="flex flex-col gap-y-8 justify-center">
              <h1 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-2xl font-montserrat font-bold">
                Complete Course By CSE FROM HOME
              </h1>
              {/* <div class="p-1 text-center text-sm font-montserrat font-medium leading-none text-primary-100 w-full bg-gradient-to-r from-purple-800 via-accent to-purple-400 rounded-full text-white">
                100%
              </div> */}
              <div className="flex gap-x-5 text-lg font-montserrat">
                <button
                  // to={`/myClass/${myClass?.courseName}`}
                  // onClick={() => nextContent()}
                  className="flex justify-center items-center bg-gradient-to-r from-purple-600 hover:from-purple-700 to-violet-500 hover:to-violet-600 px-4 py-0.5 rounded-md font-semibold text-slate-900"
                >
                  <span className="bg-gradient-to-r from-white to-sky-400 inline-block text-transparent bg-clip-text font-montserrat">
                    Continue Course
                  </span>
                </button>
                <button
                  // onClick={() => nextContent()}
                  className="module-border-wrap px-4 py-0.5 rounded-md text-violet-800 font-semibold"
                >
                  Outline
                </button>
              </div>
            </div>
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
