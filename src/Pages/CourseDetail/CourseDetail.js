import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faTools } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../PDF/PDF";
import bg from "../../Assets/website-bg.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CourseDetail = () => {
  const [myCourses, setMyCourses] = useState([]);
  const { data: courseDetail } = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    common_uses,
    courseImage,
    courseTitle,
    _id,
    course_description,
    course_duration,
    course_module,
    course_price,
    course_module_topics,
  } = courseDetail;

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [user?.email]);

  const alreadyPurchase = myCourses?.find(
    (myCourse) => myCourse?.courseName == courseTitle
  );
  console.log(alreadyPurchase);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-no-repeat py-10"
    >
      <div className="card lg:w-[40%] mx-auto bg-base-100 image-full rounded-xl ">
        <figure>
          <img src={courseImage} alt="Course Card Img" />
        </figure>
        <div className="card-body rounded-none">
          <div className="flex justify-between mb-5">
            <h2 className="card-title text-4xl font-montserrat">
              {courseTitle}
            </h2>
            <PDFDownloadLink
              document={<PDF courseDetail={courseDetail} />}
              filename="FORM"
            >
              {({ loading }) =>
                loading ? (
                  <button>Loading Document...</button>
                ) : (
                  <button>
                    <FontAwesomeIcon
                      className="text-3xl"
                      icon={faFilePdf}
                    ></FontAwesomeIcon>
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
          <p className="text-justify">
            <span className="font-bold text-lg font-montserrat">
              Course Description:{" "}
            </span>{" "}
            {course_description}
          </p>
          <p>
            <span className="font-bold text-lg">Common Uses: </span>{" "}
            {common_uses}
          </p>
          <div>
            <h4 className="text-xl font-bold my-2">Will Be Covered</h4>
            <div className="grid grid-cols-2">
              {course_module_topics?.map((topic, idx) => {
                return (
                  <div key={idx}>
                    <li className="list-none">
                      <FontAwesomeIcon icon={faTools}></FontAwesomeIcon> {topic}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-x-2 my-3">
            <div className="flex gap-x-2 text-sm bg-accent/50 px-3 py-0.5 font-semibold">
              <p>PRICE:</p>
              <p>BDT{course_price}</p>
            </div>
            <div className="flex gap-x-2 text-sm bg-accent/50 px-3 py-0.5 font-semibold">
              <p>DURATION:</p>
              <p>{course_duration}</p>
            </div>
            <div className="flex gap-x-2 text-sm bg-accent/50 px-3 py-0.5 font-semibold">
              <p>MODULE:</p>
              <p>{course_module}</p>
            </div>
          </div>
          <div className="card-actions justify-center">
            {alreadyPurchase?.paid === true ? (
              <button className="bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium font-montserrat p-3 text-[#f25189] w-1/2 rounded cursor-not-allowed">
                Already Enrolled
              </button>
            ) : (
              <button className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium font-montserrat p-3 text-[#f25189] w-1/2 rounded">
                <Link
                  to={`/course/checkout/${_id}/${course_price}/${courseTitle}`}
                >
                  Get Premium Access
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
