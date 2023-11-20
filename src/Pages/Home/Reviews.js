import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import user from "../../Assets/user.png";

const Reviews = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="my-24 mx-auto md:px-6 lg:w-[90%]">
      <h4
        className={`font-publicSans text-2xl tracking-widest pl-4 lg:pl-2 md-pl-0 pb-4 ${
          theme && "text-slate-300"
        }`}
      >
        Learners Love CSE From Home
      </h4>
      <div>
        <div>
          <h4>
            "CSE From Home helped me gain on-the-job confidence, build a
            portfolio, and earn a microcredential to share with prospective
            employers."
          </h4>
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
