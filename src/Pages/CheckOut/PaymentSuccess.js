import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const [enrollment, setEnrollment] = useState({});
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tranSactionId = query.get("transactionId");

    // const { data: enrollment, isLoading, refetch } = useQuery({
    //     queryKey: ["enrollInfo", tranSactionId],
    //     queryFn: () => fetch(`https://cse-from-home-server.vercel.app/enrollInfo?tranSactionId=${tranSactionId}`)
    //         .then(res => res.json())
    // })

    // console.log(enrollment, "From Enrollment");
    // console.log(enrollment);
    useEffect(() => {
        localStorage.setItem("tranSactionId", tranSactionId)
    }, [tranSactionId]);


    useEffect(() => {
        fetch(`https://cse-from-home-server.vercel.app/enrollInfo?tranSactionId=${tranSactionId}`)
            .then(res => res.json())
            .then(data => setEnrollment(data.data))
    }, [tranSactionId]);


    console.log(enrollment);
    return (
        <div className="flex h-screen flex-col bg-yellow-400 items-center justify-center space-y-6 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl font-montserrat">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Success</h1>
                <p className="my-4 text-center text-sm text-gray-500 font-semibold">Woah, successfully enrolled {enrollment.courseName}</p>
                <p className="my-4 text-center text-sm text-gray-500 font-semibold font-mono">Enrolled at {enrollment.paidAt}</p>
                <div className="space-x-4 bg-gray-100 py-4 text-center">
                    <button className="inline-block rounded-md bg-green-500 p-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">TRANSACTION ID: {enrollment.transactionId}</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;