import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import "./Courses.css";

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='lg:px-20 mt-20'>
            <h2 className='text-center text-3xl font-bold'>Our All Course</h2>
            <div className='courses-page'>
                <div className='px-4'>
                    {
                        allCourses.map(course => {
                            return <div key={course.courseId} className='flex'>
                                <Link to={`/course/${course.courseId}`} className='mb-2 w-full btn btn-outline btn-accent rounded-none'>{course.courseTitle}</Link>
                            </div>
                        })
                    }
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    {
                        allCourses.map(singleCourse => <SingleCourse key={singleCourse.courseId} singleCourse={singleCourse}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;