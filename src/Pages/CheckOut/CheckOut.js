import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkedCourse = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-4xl'>{checkedCourse.courseTitle}</h1>
        </div>
    );
};

export default CheckOut;