import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleCourse = ({ singleCourse }) => {
    const { common_uses, courseImage, courseTitle, courseId, course_description, course_duration, course_module, course_price } = singleCourse;
    return (
        <div className="card card-compact w-full rounded-none bg-base-100 p-4 pt-0">
            <div className='relative overflow-hidden transition duration-200 transform shadow-lg'>
                <figure>
                    <img className='w-full h-80 object-cover md:h-64 xl:h-80' src={courseImage} alt="Shoes" />
                </figure>
                <div className=' absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end'>
                    <div className='bg-red-600 w-full text-center text-slate-200'>
                        <p><FontAwesomeIcon className='mr-1' icon={faMoneyBill1}></FontAwesomeIcon>BDT {course_price}</p>
                        <p><FontAwesomeIcon className='mr-1' icon={faClock}></FontAwesomeIcon>{course_duration}</p>
                    </div>
                </div>
            </div>
            <div className="card-body border-b-4 border-r-4 border-red-600">
                <h2 className="card-title">{courseTitle}</h2>
                <p>{common_uses}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent rounded-none"><Link to={`/course/${courseId}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;