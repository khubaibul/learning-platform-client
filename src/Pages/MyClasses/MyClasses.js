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
      <div className="col-span-3">
        {myClasses?.map((myClass) => (
          <div className="bg-gradient-to-l from-[#1B0B30] to-[#100530] p-4">
            <img src={kotlin} alt="" />
            <h1>Complete {myClass?.courseName} Course By CSE FROM HOME</h1>
          </div>
        ))}
      </div>
      <div className="col-span-2">
        <h4>Your Performance</h4>
      </div>
    </div>
  );
};

export default MyClasses;
