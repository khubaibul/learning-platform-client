import React from "react";
import lottieFiles from "../../Assets/animation_lmpxh4w5.json";
import students from "../../Assets/students.png";
import Lottie from "lottie-react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className=" w-[80%] mx-auto">
      <div className="container mt-40">
        <div className="row">
          <div className="col">
            <div className="main-timeline">
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid grid-cols-2 gap-x-20">
                    <div>
                      <Lottie animationData={lottieFiles} loop={true} />
                    </div>
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto">
                      <div className="flex flex-col gap-y-7">
                        <h2 className="font-montserrat font-bold text-3xl">
                          A huge collection of content for you to learn{" "}
                          <span className="italic underline text-accent">
                            Programming Languages.
                          </span>
                        </h2>
                        <p>
                          With{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            hundreds of hours
                          </span>{" "}
                          of content, you will never stuck for something to
                          follow.
                        </p>
                      </div>
                      <button className="font-montserrat btn btn-sm btn-accent btn-outline rounded-none">
                        Browse Our Paths
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="grid grid-cols-2 gap-x-20 my-5">
                    <div className="flex flex-col items-start justify-between h-[50%] my-auto">
                      <div className="flex flex-col gap-y-7">
                        <h2 className="font-montserrat font-bold text-3xl">
                          Join with thousands of others{" "}
                          <span className="italic underline text-accent">
                            Developers.
                          </span>
                        </h2>
                        <p>
                          More than{" "}
                          <span className="font-semibold font-montserrat text-accent">
                            three thousands
                          </span>{" "}
                          students learning from us with joy.
                        </p>
                      </div>
                      <button className="font-montserrat btn btn-sm btn-accent btn-outline rounded-none">
                        Join Us Today
                      </button>
                    </div>
                    <div>
                      <img src={students} alt="Students" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <span className="timeline-year">2017</span>
                  <div className="timeline-icon">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">Mongo DB</h3>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <span className="timeline-year">2017</span>
                  <div className="timeline-icon">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">BlackPearl</h3>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <span className="timeline-year">2017</span>
                  <div className="timeline-icon">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">Angular</h3>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <span className="timeline-year">2017</span>
                  <div className="timeline-icon">
                    <i className="fa fa-apple" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">Laravel</h3>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <span className="timeline-year">2017</span>
                  <div className="timeline-icon">
                    <i className="fa fa-edit" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">Creapure</h3>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
