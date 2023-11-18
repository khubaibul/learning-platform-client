import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import heroBg from "../../Assets/hero-bg.jpg";
import bgVideo from "../../Assets/Coding Hack Video.mp4";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import HomeCourseCard from "../HomeCourseCard/HomeCourseCard";
import LandingPage from "./LandingPage";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";

const Home = () => {
  const { data } = useLoaderData();

  const { theme } = useContext(AuthContext);

  return (
    <div className="mb-28">
      <div
        className="hero-section"
        // style={{ backgroundImage: `url(${heroBg})` }}
      >
        <video
          className="bg-video"
          src={bgVideo}
          autoplay
          muted
          loop
        >
          {/* <source src={bgVideo} type="video/mp4" /> */}
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          {/* <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md font-montserrat">
              <h1 className="mb-5 text-5xl font-bold">CSE FROM HOME</h1>
              <p className="mb-5">
                We Provide Valuable Programming Language And CSE Support To Our
                Students.
              </p>
              <button className="btn btn-outline btn-accent rounded-none">
                <Link to="/courses">Enroll Our Courses</Link>
              </button>
            </div>
          </div> */}
        </video>
      </div>

      <LandingPage />

      {/* Courses Start */}
      <>
        <div className="lg:mt-48 mt-8 lg:text-4xl">
          <h4
            className={`text-center font-semibold font-montserrat mb-10 tracking-widest ${
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
