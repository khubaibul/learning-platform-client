import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Reviews = () => {
    const { theme } = useContext(AuthContext);
  return (
    <div>
      <h4
        className={`font-semibold font-publicSans text-3xl tracking-widest pl-4 lg:pl-2 md-pl-0 pb-4 ${
          theme && "text-slate-300"
        }`}
      >
        Contact Us
      </h4>
    </div>
  );
};

export default Reviews;
