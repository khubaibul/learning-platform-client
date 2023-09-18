import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const About = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <section className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div
                className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg ${
                  theme ? "bg-gray-800" : "bg-accent"
                } rounded-none`}
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                  className="w-full align-middle"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 className="text-xl font-bold font-montserrat text-white">
                    CSE From Home.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We are serving quality course since 2012 in this platform.
                    We have a great dedicated instructor team who are always
                    helping our student to solving problems. And also give
                    instruction to the students.
                  </p>
                </blockquote>
              </div>
            </div>

            <div
              className={`w-full md:w-6/12 px-4 ${theme && "text-slate-300"}`}
            >
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${
                          theme ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                      </div>
                      <h6 className="text-lg mb-1 font-semibold font-montserrat">
                        Quality Course Content
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We are serving quality video,docs,task to the students
                        related in their course tagline.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${
                          theme ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                      </div>
                      <h6 className="text-lg mb-1 font-semibold font-montserrat">
                        Support System
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Our support system is student friendly. Our instructors
                        are always free to help student. Students are feel free
                        to discuss.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${
                          theme ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                      </div>
                      <h6 className="text-lg mb-1 font-semibold font-montserrat">
                        Website Base Education System
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Student can get access all of our course content from
                        anywhere by visiting our website(With Premium Access)
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className={`text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${
                          theme ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                      </div>
                      <h6 className="text-lg mb-1 font-semibold font-montserrat">
                        Ready For Work
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Alongside course, we provide real time instruction for
                        being a professional. Which will improve student skill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
