import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import dataScience from "../../Assets/data science.png";
import machineLearning from "../../Assets/machine learning.png";
import programming from "../../Assets/programming.png";
import ai from "../../Assets/ai.png";
import network from "../../Assets/network.png";
import ethicalHacking from "../../Assets/ethical hacking.png";
import cloudComputing from "../../Assets/cloud computing.png";
import bgVideo from "../../Assets/Coding Hack Video.mp4";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";
import LandingPage from "./LandingPage";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";

const Home = () => {
  const { data } = useLoaderData();
  const { theme } = useContext(AuthContext);

  const skillCards = [
    {
      name: "Data Science",
      image: dataScience,
    },
    {
      name: "Machine Learning",
      image: machineLearning,
    },
    {
      name: "Programming & Development",
      image: programming,
    },
    {
      name: "Artificial Intelligence",
      image: ai,
    },
    {
      name: "Network System",
      image: network,
    },
    {
      name: "Ethical Hacking",
      image: ethicalHacking,
    },
    {
      name: "Cloud Computing",
      image: cloudComputing,
    },
  ];

  return (
    <div className="mb-28">
      <div className="hero-main-section w-[100%]">
        <video className="bg-video" src={bgVideo} autoPlay muted loop />
        <div className="hero-content-section">
          <div className="lg:mt-16 md:mt-10 mt-6">
            <h1 className="font-publicSans lg:text-7xl md:text-3xl text-2xl text-white text-center">
              Learn new skills. Prove your potential.
            </h1>
            <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 lg:w-[90%] mx-auto gap-2 mt-20 place-items-center">
              {skillCards?.map((skillCard) => (
                <div className="bg-slate-300 hover:bg-pink-50 p-4 lg:w-36 md:w-28 w-20 lg:h-48 md:h-40 h-28 flex flex-col justify-center items-center gap-y-2 text-center rounded hover:cursor-pointer hover:outline outline-4 outline-pink-700 transition-all">
                  <img
                    src={skillCard?.image}
                    className="lg:w-16 md:w-12 w-10"
                    alt=""
                  />
                  <h3 className="font-publicSans lg:text-base md:text-sm text-xs">
                    {skillCard?.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LandingPage />

      {/* Courses Start */}
      <>
        <div className="lg:mt-48 mt-8 lg:text-4xl lg:w-[80%] md:w-[90%] mx-auto">
          <h4
            className={`font-semibold font-publicSans mb-10 tracking-widest pl-4 lg:pl-0 md-pl-0 ${
              theme && "text-slate-300"
            }`}
          >
            Our Courses
          </h4>
        </div>
        <div className="grid lg:grid-cols-2 lg:w-[80%] md:grid-cols-1 md:w-[90%] sm:grid-cols-1 grid-cols-1 w-full mx-auto gap-x-8 gap-y-12 px-4 lg:px-0 md:px-0">
          {data?.map((course) => (
            <HomeCourseCard key={course._id} course={course}></HomeCourseCard>
          ))}
        </div>
      </>
      {/* Courses End */}
      <div className="flex justify-center my-10">
        <button className="btn btn-sm px-10 btn-outline btn-accent rounded-none font-montserrat">
          <Link to="/courses">All Course</Link>
        </button>
      </div>

      <OurTeam />

      <ContactUs />
    </div>
  );
};

export default Home;
