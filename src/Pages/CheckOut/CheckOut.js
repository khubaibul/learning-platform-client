import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import checkOutBg from "../../Assets/checkout.jpg";

const CheckOut = () => {
    const checkedCourse = useLoaderData();
    const { courseTitle, courseId, course_price } = checkedCourse;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${checkOutBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <table className="table-normal bg-slate-300 text-black font-bold">
                        <thead className='bg-slate-400'>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{courseId}</td>
                                <td>{courseTitle}</td>
                                <td><FontAwesomeIcon icon={faMoneyBill1}></FontAwesomeIcon> BDT {course_price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='btn btn-outline btn-error rounded-none mt-2 text-slate-500'>Process To Pay</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;