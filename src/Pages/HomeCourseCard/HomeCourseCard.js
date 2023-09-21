import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const HomeCourseCard = ({ course }) => {
  const { theme } = useContext(AuthContext);
  const {
    common_uses,
    courseImage,
    courseTitle,
    _id,
    course_description,
    course_duration,
    course_module,
    course_price,
  } = course;
  return (
    <div
      className={`flex flex-row-reverse h-[250px] overflow-hidden ${
        theme
          ? "!bg-gray-900 shadow hover:shadow-accent text-slate-300"
          : "bg-base-100"
      } shadow-xl hover:shadow-2xl mx-auto rounded-none`}
    >
      <div className="border-b-4 border-accent w-[40%] px-4 py-1 flex flex-col justify-between">
        <div>
          <h2 className="card-title font-montserrat">{courseTitle}</h2>
          <p className="text-sm text-justify">{common_uses.slice(0, 150)}...</p>
        </div>
        <div className="text-sm font-semibold font-montserrat">
          <p>
            <FontAwesomeIcon className="mr-1" icon={faClock}></FontAwesomeIcon>
            {course_duration}
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-1"
              icon={faMoneyBill1}
            ></FontAwesomeIcon>
            BDT {course_price}
          </p>
        </div>
        <div className=" justify-end">
          <button className="btn btn-sm btn-outline btn-accent rounded-none font-montserrat">
            <Link to={`/course/${_id}`}>Get Course</Link>
          </button>
        </div>
      </div>
      <figure className="w-[60%]">
        <img className="w-full h-full" src={courseImage} alt="Course Img" />
      </figure>
    </div>
  );
};

export default HomeCourseCard;
