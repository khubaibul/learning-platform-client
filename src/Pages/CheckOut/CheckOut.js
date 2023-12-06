import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import checkOutBg from "../../Assets/checkout.jpg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";

const CheckOut = () => {
  const { _id, course_price, courseTitle } = useParams();
  const { user } = useContext(AuthContext);

  const handlePay = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    // toast.success("Your Order Is Placed Successfully...")
    const paymentData = {
      total_amount: course_price,
      currency: "BDT",
      product_name: courseTitle,
      cus_name: user.displayName,
      cus_email: user.email,
      cus_phone: phone,
    };

    fetch("https://cse-from-home-server.vercel.app/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${checkOutBg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content bg-gradient-to-tr from-[#A12350] via-[#60277B] to-[#362298] shadow-2xl rounded-md">
        <div>
          <form onSubmit={handlePay}>
            <div className="font-publicSans">
              <table className="table-normal text-black font-bold bg-slate-400">
                <thead className="">
                  <tr>
                    <th>Course ID</th>
                    <th>Course Title</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-montserrat">
                    <td>{_id.toUpperCase()}</td>
                    <td>{courseTitle}</td>
                    <td>
                      <FontAwesomeIcon icon={faMoneyBill1}></FontAwesomeIcon>{" "}
                      BDT {course_price}
                    </td>
                  </tr>
                </tbody>
              </table>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                className="input rounded-none input-primary w-full focus:border-0 border-none text-black font-semibold"
              />
            </div>
            <button class="group relative font-semibold font-montserrat h-10 w-48 mt-4 overflow-hidden bg-white shadow cursor-pointer">
              <div class="absolute inset-0 w-3 bg-accent transition-all duration-[500ms] ease-out group-hover:w-full"></div>
              <input
                type="submit"
                value="Process To Payment"
                className="rounded-none relative text-black group-hover:text-white ml-2 cursor-pointer"
              />
            </button>
          </form>
          <h5 className="mt-4 italic text-sm font-publicSans">
            Education is not preparation for life; education is life itself.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
