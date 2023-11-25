import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import user from "../../Assets/user.png";

const Reviews = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="my-28 mx-auto md:px-6 lg:w-[70%]">
      <h4
        className={`font-publicSans text-2xl tracking-widest pl-4 lg:pl-2 md-pl-0 pb-4 ${
          theme && "text-slate-300"
        }`}
      >
        Learners Love CSE From Home
      </h4>
      <div className="lg:flex md:flex gap-x-8">
        <div className="bg-slate-300 p-8 rounded-br-[80px] flex flex-col gap-y-4">
          <div>
            <h4 className="font-publicSans text-lg">
              "CSE From Home helped me gain on-the-job confidence, build a
              portfolio, and earn a microcredential to share with prospective
              employers."
            </h4>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={user} className="w-6" alt="User" />
            <div className="flex flex-col">
              <h2 className="font-publicSans font-semibold">
                Mahmoud, Android Developer
              </h2>
              <h3 className="text-sm">CSE From Home Graduate</h3>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 p-8 rounded-br-[80px] flex flex-col gap-y-4">
          <div>
            <h4 className="font-publicSans text-lg">
              "I started with the basics, completed a Nanodegree program, and
              gained so much experience. I'm now in a new Android job!"
            </h4>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={user} className="w-6" alt="User" />
            <div className="flex flex-col">
              <h2 className="font-publicSans font-semibold">
                Den, Web Developer
              </h2>
              <h3 className="text-sm">CSE From Home Graduate</h3>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 p-8 rounded-br-[80px] flex flex-col gap-y-4">
          <div>
            <h4 className="font-publicSans text-lg">
              "Udacity gave me the tools to advance my career--I am now
              spearheading a machine learning research team at my company."
            </h4>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={user} className="w-6" alt="User" />
            <div className="flex flex-col">
              <h2 className="font-publicSans font-semibold">
                Matthew, Machine Learning
              </h2>
              <h3 className="text-sm">CSE From Home Graduate</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
