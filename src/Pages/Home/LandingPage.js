import React, { useContext } from "react";
import lottieFiles from "../../Assets/animation_lmpxh4w5.json";
import support from "../../Assets/Support.json";
import students from "../../Assets/students.png";
import P2PSupport from "../../Assets/1v1-Support.json";
import skills from "../../Assets/Skills.json";
import Lottie from "lottie-react";
import "./LandingPage.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const LandingPage = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className=" w-[80%] mx-auto pt-10">
      <h4
        className={`font-semibold font-publicSans text-4xl tracking-widest pl-4 lg:pl-2 md-pl-0 ${
          theme && "text-slate-300"
        }`}
      >
        Why we different
      </h4>
      <div className="container mt-10 lg:block md:block hidden">
        <div className="row">
          <div className="col">
            <div className="main-timeline">
              {/* 1 */}
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 pl-12">
                    <div>
                      <Lottie
                        className="lg:w-[450px] lg:h-[350px] md:w-[550px] md:h-[250px]"
                        animationData={lottieFiles}
                        loop={true}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center lg:h-[100%] my-auto lg:gap-y-10 mb-8 lg:mb-0">
                      <div
                        className={`flex flex-col gap-y-4 ${
                          theme ? "text-slate-300" : " text-black"
                        }`}
                      >
                        <h2 className={`font-montserrat font-bold text-2xl`}>
                          A huge collection of content for you to learn{" "}
                          <span className="italic underline text-accent">
                            Programming Languages.
                          </span>
                        </h2>
                        <p>
                          With{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            hundreds of hours
                          </span>{" "}
                          of content, you will never stuck for something to
                          follow.
                        </p>
                      </div>
                      <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-accent font-medium  font-publicSans tracking-widest py-2 px-8 text-[#f25189] rounded transition-all duration-300">
                        Browse Our Paths
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 pl-12">
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto">
                      <div
                        className={`flex flex-col gap-y-7 ${
                          theme ? "text-slate-300" : " text-black"
                        }`}
                      >
                        <h2 className="font-montserrat font-bold text-2xl">
                          Grow your{" "}
                          <span className="italic underline text-accent">
                            skills.
                          </span>{" "}
                          Define your{" "}
                          <span className="italic underline text-accent">
                            Future.
                          </span>
                        </h2>
                        <p>
                          We focus on{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            skills
                          </span>{" "}
                          more than certificate. So you can
                          <span className="font-semibold font-montserrat text-accent">
                            {" "}
                            achieve
                          </span>{" "}
                          your desire skills.
                        </p>
                      </div>
                      <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-accent font-medium  font-publicSans tracking-widest py-2 px-8 text-[#f25189] rounded transition-all duration-300">
                        Join Us Today
                      </button>
                    </div>
                    <div>
                      <Lottie
                        className="w-[450px] h-[350px]"
                        animationData={skills}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="timeline">
                <div className="timeline-content md:my-10">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 pl-12 md:pb-5">
                    <div>
                      <Lottie
                        className="w-[450px] h-[350px]"
                        animationData={support}
                        loop={true}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto lg:gap-y-10 gap-y-0">
                      <div
                        className={`flex flex-col gap-y-7 ${
                          theme ? "text-slate-300" : " text-black"
                        }`}
                      >
                        <h2 className="font-montserrat font-bold text-2xl">
                          We provide support to our students{" "}
                          <span className="italic underline text-accent">
                            24/7.
                          </span>
                        </h2>
                        <p>
                          You don't need to worry if you get stuck in any
                          problems or errors because our{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            support team will help you anytime.
                          </span>
                        </p>
                      </div>
                      <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-accent font-medium  font-publicSans tracking-widest py-2 px-8 text-[#f25189] rounded transition-all duration-300">
                        Meet With Support Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 my-5">
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto">
                      <div
                        className={`flex flex-col gap-y-7 ${
                          theme ? "text-slate-300" : " text-black"
                        }`}
                      >
                        <h2 className="font-montserrat font-bold text-2xl">
                          Our instructor gives you{" "}
                          <span className="italic underline text-accent">
                            One V One support.
                          </span>
                        </h2>
                        <p>
                          More than{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            three thousands
                          </span>{" "}
                          students learning from us with joy.
                        </p>
                      </div>
                      <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-accent font-medium  font-publicSans tracking-widest py-2 px-8 text-[#f25189] rounded transition-all duration-300">
                        Get Support
                      </button>
                    </div>
                    <div>
                      <Lottie
                        className="w-[450px] h-[350px]"
                        animationData={P2PSupport}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 pl-16 my-5 md:pb-10">
                    <div>
                      <img
                        className="lg:w-[450px] lg:h-[350px] md:w-[350px] md:h-[250px]"
                        src={students}
                        alt="Students"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto">
                      <div
                        className={`flex flex-col gap-y-7 ${
                          theme ? "text-slate-300" : " text-black"
                        }`}
                      >
                        <h2 className="font-montserrat font-bold text-2xl">
                          Join with thousands of other{" "}
                          <span className="italic underline text-accent">
                            Developers.
                          </span>
                        </h2>
                        <p>
                          More than{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            three thousands
                          </span>{" "}
                          students learning from us with joy.
                        </p>
                      </div>
                      <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-accent font-medium  font-publicSans tracking-widest py-2 px-8 text-[#f25189] rounded transition-all duration-300">
                        Join Us Today
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
