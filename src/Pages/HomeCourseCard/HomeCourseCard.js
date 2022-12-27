import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const HomeCourseCard = ({ course }) => {
    const { theme } = useContext(AuthContext);
    const { common_uses, courseImage, courseTitle, _id, course_description, course_duration, course_module, course_price } = course;
    return (
        <div className={`card lg:card-side ${theme ? "!bg-gray-900 shadow-md shadow-accent" : "bg-base-100"} shadow-xl lg:w-[60%] mx-auto rounded-none my-10`}>
            <div className="card-body border-b-4 border-red-600">
                <h2 className="card-title">{courseTitle}</h2>
                <p>{common_uses}</p>
                <p><FontAwesomeIcon className='mr-1' icon={faClock}></FontAwesomeIcon>{course_duration}</p>
                <p><FontAwesomeIcon className='mr-1' icon={faMoneyBill1}></FontAwesomeIcon>BDT {course_price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent rounded-none"><Link to={`/course/${_id}`}>Get Course</Link></button>
                </div>
            </div>
            <figure><img className='w-96 h-72' src={courseImage} alt="Course Img" /></figure>
        </div>
    );
};

export default HomeCourseCard;