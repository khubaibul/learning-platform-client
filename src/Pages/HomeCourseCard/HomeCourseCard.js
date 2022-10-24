import React from 'react';

const HomeCourseCard = ({ course }) => {
    // console.log(course);
    const { common_uses, courseImage, courseTitle, courseId, course_description, course_duration, course_module, course_price } = course;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:w-[60%] mx-auto rounded-none my-10">
            <div className="card-body border-b-4 border-red-600">
                <h2 className="card-title">{courseTitle}</h2>
                <p>{common_uses}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent rounded-none">Get Course</button>
                </div>
            </div>
            <figure><img className='w-96 h-64' src={courseImage} alt="Album" /></figure>
        </div>
    );
};

export default HomeCourseCard;