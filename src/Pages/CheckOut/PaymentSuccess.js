import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import bg2 from "../../Assets/website-bg-another.png";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [enrollment, setEnrollment] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tranSactionId = query.get("transactionId");

  useEffect(() => {
    fetch(
      `https://cse-from-home-server.vercel.app/enrollInfo?tranSactionId=${tranSactionId}`
    )
      .then((res) => res.json())
      .then((data) => setEnrollment(data.data));
    if (enrollment?.paid === true) {
      toast.success(
        "Congratulation" +
          " " +
          "You've successfully enrolled" +
          " " +
          enrollment?.courseName
      );
    }
  }, [tranSactionId, enrollment?.paid, enrollment?.courseName]);

  console.log(enrollment);

  return (
    <div
      style={{ backgroundImage: `url(${bg2})` }}
      className="bg-cover bg-no-repeat bg-center flex h-screen flex-col bg-yellow-400 items-center justify-center space-y-6 px-4 sm:flex-row sm:space-x-6 sm:space-y-0"
    >
      <div className="w-full max-w-sm overflow-hidden bg-gradient-to-tr from-[#A12350] via-[#60277B] to-[#362298] shadow-2xl rounded-md duration-300 hover:scale-105 hover:shadow-xl font-publicSans text-slate-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mt-8 h-16 w-16 text-green-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <h1 className="mt-2 text-center text-2xl font-bold">Success</h1>
        <p className="my-4 text-center text-sm font-semibold">
          Woah, successfully enrolled{" "}
        </p>
        <p className="my-4 text-center font-semibold">
          Enrolled at{" "}
          <span className="italic font-extrabold bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-lg">
            {enrollment?.courseName}
          </span>
        </p>
        <div className="space-x-4 py-4 text-center">
          <button className="inline-block rounded-sm bg-green-500 px-4 py-1 font-semibold shadow-md duration-75 hover:bg-green-400 text-gray-800">
            Go To Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
