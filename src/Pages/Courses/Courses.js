import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import "./Courses.css";

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='lg:px-20 mt-20'>
            <h2 className='text-center text-3xl font-bold'>Our All Course</h2>
            <div className='px-4 lg:hidden'>
                {
                    allCourses.map(course => {
                        return <div key={course.courseId} className='flex'>
                            <Link to={`/course/${course.courseId}`} className='mb-2 w-full btn btn-outline btn-accent rounded-none'>
                                <img className='w-5 mr-2' src={course.icon} alt="" />
                                {course.courseTitle}
                            </Link>
                        </div>
                    })
                }
            </div>
            <div className='grid grid-cols-5'>
                <div className='px-4 lg:block hidden'>
                    {
                        allCourses.map(course => {
                            return <div key={course.courseId} className='flex'>
                                <Link to={`/course/${course.courseId}`} className='mb-2 w-full btn btn-outline btn-accent rounded-none'>
                                    <img className='w-5 mr-2' src={course.icon} alt="" />
                                    {course.courseTitle}
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:col-span-4 col-span-5'>
                    {
                        allCourses.map(singleCourse => <SingleCourse key={singleCourse.courseId} singleCourse={singleCourse}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;