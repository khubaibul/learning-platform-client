import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTools } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    const { common_uses, courseImage, courseTitle, courseId, course_description, course_duration, course_module, course_price, course_module_topics } = courseDetail;
    console.log(course_module_topics);
    return (
        <div className="card lg:w-[40%] my-10 mx-auto bg-base-100 shadow-xl image-full rounded-none">
            <figure><img src={courseImage} alt="Course Card Img" /></figure>
            <div className="card-body rounded-none">
                <div className='flex justify-between mb-5'>
                    <h2 className="card-title text-4xl">{courseTitle}</h2>
                    <button><FontAwesomeIcon className='text-3xl' icon={faFilePdf}></FontAwesomeIcon></button>
                </div>
                <p className='text-justify'><span className='font-bold text-lg'>Course Description: </span> {course_description}</p>
                <div className='flex gap-x-2 my-3'>
                    <button className="btn gap-2 rounded-none">
                        PRICE
                        <div className="badge badge-accent">BDT {course_price}</div>
                    </button>
                    <button className="btn gap-2 rounded-none">
                        DURATION
                        <div className="badge badge-accent">{course_duration}</div>
                    </button>
                    <button className="btn gap-2 rounded-none">
                        MODULE
                        <div className="badge badge-accent">{course_module}</div>
                    </button>
                </div>
                <p><span className='font-bold text-lg'>Common Uses: </span> {common_uses}</p>
                <div>
                    <h4 className='text-xl font-bold my-2'>Will Be Coverd</h4>
                    <div className='grid grid-cols-2'>
                        {
                            course_module_topics.map((topic, idx) => {
                                return <div>
                                    <li className='list-none'><FontAwesomeIcon icon={faTools}></FontAwesomeIcon> {topic}</li>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-accent rounded-none"><Link to={`/course/checkout/${courseId}`}>Get Premium Access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;