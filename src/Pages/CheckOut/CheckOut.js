import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import checkOutBg from "../../Assets/checkout.jpg";
import toast from 'react-hot-toast';

const CheckOut = () => {

    const handlePay = () => {
        toast.success("Your Order Is Placed Successfully...")
    }
    const { courseId, course_price, courseTitle } = useParams();
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
                                <th>Total</th>
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
                    <button onClick={handlePay} className='btn btn-outline btn-error rounded-none mt-2 text-slate-500'><Link to="/">Process To Pay</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;