import React from 'react';
import { useLoaderData } from 'react-router-dom';
import heroBg from "../../Assets/hero-bg.jpg";
import HomeCourseCard from '../HomeCourseCard/HomeCourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    const homePageShownCourses = allCourses.slice(1, 5)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CSE FROM HOME</h1>
                        <p className="mb-5">We Provide Valuable Programming Language And CSE Support To Our Students.</p>
                        <button className="btn btn-outline btn-primary rounded-none">Get Our Course</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    homePageShownCourses.map(course => <HomeCourseCard key={course.courseId} course={course}></HomeCourseCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-accent rounded-none'>All Course</button>
            </div>
        </div>
    );
};

export default Home;