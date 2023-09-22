import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const OurTeam = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="mt-28">
      <h1
        className={`text-center font-semibold font-montserrat mb-10 tracking-widest text-4xl ${
          theme && "text-slate-300"
        }`}
      >
        Our Instructors
      </h1>
      <h3 className="font-montserrat">Let's meet our team</h3>
    </div>
  );
};

export default OurTeam;
