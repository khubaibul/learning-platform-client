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
              <img className="h-56 w-96" src={kotlin} alt="" />
              <div>
                <h1 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-2xl font-montserrat font-bold">
                  Complete {myClass?.courseName} Course By CSE FROM HOME
                </h1>
                <div class="p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-full bg-gradient-to-r from-purple-800 via-accent to-purple-400 rounded-full text-white">
                  100%
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
