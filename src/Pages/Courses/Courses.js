import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./Courses.css";

const Courses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const { data: allCourses } = useLoaderData();
  const { theme, user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [user?.email]);

  // console.log("from courses", myCourses);
  // console.log(allCourses);

  return (
    <div className="lg:px-20 mt-20 mb-20">
      <h2
        className={`text-center text-3xl font-bold font-montserrat ${
          theme && "text-slate-300"
        } mb-8`}
      >
        Our All Course
      </h2>
      <div className="px-4 lg:hidden">
        {allCourses?.map((course) => {
          return (
            <div key={course._id} className="flex">
              <Link
                to={`/course/${course._id}`}
                className="mb-2 w-full btn btn-outline btn-accent rounded-none font-montserrat"
              >
                <img className="w-5 mr-2" src={course.icon} alt="" />
                {course.courseTitle}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-5">
        <div className="px-4 lg:block hidden">
          {allCourses?.map((course) => {
            return (
              <div key={course._id} className="flex">
                <Link
                  to={`/course/${course._id}`}
                  className="mb-2 w-full btn btn-outline btn-accent rounded-none font-montserrat"
                >
                  <img className="w-5 mr-2" src={course.icon} alt="" />
                  {course.courseTitle}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:col-span-4 col-span-5 gap-4">
          {allCourses.map((singleCourse) => (
            <SingleCourse
              key={singleCourse._id}
              singleCourse={singleCourse}
              myCourses={myCourses}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
