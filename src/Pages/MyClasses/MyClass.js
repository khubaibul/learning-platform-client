import React, { useContext, useEffect, useState } from "react";
import lock from "../../Assets/lock.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const MyClass = () => {
  const [classes, setMyClasses] = useState([]);
  const [contentURL, setContentURL] = useState(
    "https://www.youtube.com/embed/vhfzN69ALpY?si=0_Fh-OJNNaHt0upY"
  );
  const [contentTitle, setContentTitle] = useState(
    "What is Kotlin? Introduction To Kotlin Tutorial | CheezyCode #1"
  );
  const { user, logOut, theme } = useContext(AuthContext);
  const { courseName } = useParams();

  const nextContent = () => {
    setContentURL(contentURL[0 + 1]);
  };
  const previewsContent = () => {
    setContentURL(contentURL[0 - 1]);
  };

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/classes/${courseName}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data?.data));
  }, [courseName]);

  return (
    <div className="w-[80%] mx-auto">
      <h1
        className={`text-center mt-6 mb-4 font-montserrat text-2xl font-bold tracking-wider ${
          theme ? "text-slate-300" : " text-gray-900"
        }`}
      >
        CSE From Home -{" "}
        <span className="italic font-extrabold bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text">
          {courseName}
        </span>
      </h1>
      <div className="lg:flex mb-10 gap-x-10">
        <div className="flex flex-col gap-y-8">
          <iframe
            className="shadow-lg shadow-violet-200 rounded-md lg:w-[800px] lg:h-[450px]"
            // width="800"
            // height="450"
            src={contentURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="flex justify-between">
            <h2 className="font-montserrat font-bold text-xl tracking-wider bg-gradient-to-r from-purple-800 via-accent to-purple-600 inline-block text-transparent bg-clip-text">
              {contentTitle}
            </h2>
            <div className="flex gap-x-5 text-lg font-montserrat">
              <button
                // onClick={() => previewsContent()}
                className="module-border-wrap px-4 py-0.5 rounded-md text-violet-800 font-semibold w-28 h-10"
              >
                Previous
              </button>
              <button
                // onClick={() => nextContent()}
                className="bg-gradient-to-r from-purple-600 hover:from-purple-700 to-violet-500 hover:to-violet-600 px-4 py-0.5 rounded-md font-semibold text-slate-900 w-28 h-10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="transition-all duration-1000 bg-gradient-to-r from-purple-900 to-violet-800 w-full list-none p-2 flex flex-col gap-y-2 rounded-md h-fit">
          {classes?.milestone?.map((milestone) => (
            <details className="outline rounded outline-slate-300 p-2 text-white">
              <summary className="cursor-pointer text-lg font-bold tracking-wide">
                {milestone?.milestoneName}
              </summary>
              <div className="bg-[#111827] p-2 rounded-lg">
                {milestone?.module?.map((singleModule) => (
                  <details>
                    <summary className="cursor-pointer">
                      {singleModule?.moduleName}
                    </summary>
                    <div className="pl-4 flex flex-col gap-2">
                      {/* {singleModule?.forEach((singleVideo) => (
                        <summary>
                          <button
                            onClick={() => setContentURL(contentsURL[0])}
                            className="cursor-pointer flex items-center gap-x-0.5"
                          >
                            <img className="w-5 h-5" src={check} alt="" />
                            <h4>{singleVideo?.videoTitle}</h4>
                          </button>
                        </summary>
                      ))} */}
                      <summary className="border-2 p-1 rounded-md border-violet-700">
                        <button
                          onClick={() => {
                            setContentURL(singleModule?.video[0].videoSource);
                            setContentTitle(singleModule?.video[0].videoTitle);
                          }}
                          className="cursor-pointer flex items-center justify-center gap-x-0.5"
                        >
                          <img className="w-4 h-4" src={lock} alt="" />
                          <h4 className="text-xs">
                            {singleModule?.video[0].videoTitle}
                          </h4>
                        </button>
                      </summary>
                      <summary className="border-2 p-1 rounded-md border-violet-700">
                        <button
                          onClick={() => {
                            setContentURL(singleModule?.video[1].videoSource);
                            setContentTitle(singleModule?.video[1].videoTitle);
                          }}
                          className="cursor-pointer flex items-center gap-x-0.5"
                        >
                          <img className="w-4 h-4" src={lock} alt="" />
                          <h4 className="text-xs">
                            {singleModule?.video[1].videoTitle}
                          </h4>
                        </button>
                      </summary>
                      <summary className="border-2 p-1 rounded-md border-violet-700">
                        <button
                          onClick={() => {
                            setContentURL(singleModule?.video[2].videoSource);
                            setContentTitle(singleModule?.video[2].videoTitle);
                          }}
                          className="cursor-pointer flex items-center gap-x-0.5"
                        >
                          <img className="w-4 h-4" src={lock} alt="" />
                          <h4 className="text-xs">
                            {singleModule?.video[2].videoTitle}
                          </h4>
                        </button>
                      </summary>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}

          {/* <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="bg-[#111827] p-2 rounded-lg">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button className="cursor-pointer flex items-center gap-x-0.5">
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                </div>
              </details>
            </div>
          </details> */}
        </div>
      </div>
    </div>
  );
};

export default MyClass;
