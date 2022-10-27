import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import heroBg from "../../Assets/hero-bg.jpg";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import HomeCourseCard from '../HomeCourseCard/HomeCourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    const homePageShownCourses = allCourses.slice(0, 4);
    const {theme} = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CSE FROM HOME</h1>
                        <p className="mb-5">We Provide Valuable Programming Language And CSE Support To Our Students.</p>
                        <button className="btn btn-outline btn-primary rounded-none"><Link to="/courses">Get Our Course</Link></button>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-36 lg:text-3xl'>
                    <h4 className={`text-center ${theme && "text-slate-300"}`} >All Course From CSE From Home</h4>
                </div>
                <div>
                    {
                        homePageShownCourses.map(course => <HomeCourseCard key={course.courseId} course={course}></HomeCourseCard>)
                    }
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <button className='btn btn-outline btn-accent rounded-none'><Link to="/courses">All Course</Link></button>
            </div>
        </div>
    );
};

export default Home;