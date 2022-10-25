import React from 'react';
import errorImage from "../../Assets/error-img.jpg";
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img className='w-[55%]' src={errorImage} alt="" />
            <h1 className='text-4xl'>Oops! An Error Ocurred!</h1>
            {error && (
                <div className='flex mt-4 items-center text-2xl mb-2'>
                    <p className='font-bold mr-3 text-lg'>{error.status}</p>
                    <p className='text-red-500 font-bold'>{error.statusText || error.message}</p>
                </div>
            )}
            <button className='btn btn-outline btn-warning rounded-none'><Link to="/">Back To Homepage</Link></button>
        </div>
    );
};

export default ErrorPage;