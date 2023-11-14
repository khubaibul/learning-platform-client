import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import kotlin from "../../Assets/kotlin.png";

const MyClasses = () => {
  const { user, theme } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user?.email]);
  console.log(myClasses);

  return (
    <div className="grid grid-cols-5 gap-x-5">
      <div className="col-span-4">
        {myClasses?.map((myClass) => (
          <>
            <div className="bg-gradient-to-l from-[#1B0B30] to-[#100530] p-8 rounded-lg flex gap-x-8">
              <img className="h-56 w-96 rounded-md" src={kotlin} alt="" />
              <div className="flex flex-col gap-y-8 justify-center">
                <h1 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-2xl font-montserrat font-bold">
                  Complete {myClass?.courseName} Course By CSE FROM HOME
                </h1>
                <div class="p-1 text-center text-sm font-montserrat font-medium leading-none text-primary-100 w-full bg-gradient-to-r from-purple-800 via-accent to-purple-400 rounded-full text-white">
                  100%
                </div>
                <div className="flex gap-x-5 text-lg font-montserrat">
                  <button
                    // onClick={() => nextContent()}
                    className="bg-gradient-to-r from-purple-600 hover:from-purple-700 to-violet-500 hover:to-violet-600 px-4 py-0.5 rounded-md font-semibold text-slate-900"
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
          </>
        ))}
      </div>
      <div className="col-span-1">
        <h4>Your Performance</h4>
      </div>
    </div>
  );
};

export default MyClasses;
