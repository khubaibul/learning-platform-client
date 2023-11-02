import React, { useState } from "react";
import lock from "../../Assets/lock.png";
import check from "../../Assets/checked.png";

const MyClass = ({ course }) => {
  const contentsURL = [
    "https://www.youtube.com/embed/F9UC9DY-vIU?si=2V3IKmgh_ZbkiW1Q",
    "https://www.youtube.com/embed/5flXf8nuq60?si=h-O9mm1iykW-Jbwi",
    "https://www.youtube.com/embed/TEXaoSC_8lQ?si=VQLJe3pFjnhLy53d",
  ];

  const [contentURL, setContentURL] = useState(contentsURL[0]);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center mt-6 mb-4 font-montserrat text-2xl font-bold tracking-wider">
        CSE From Home -{" "}
        <span className="italic font-extrabold bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text">
          Kotlin
        </span>
      </h1>
      <div className="flex mb-10 gap-x-10">
        <div className="flex flex-col gap-y-8">
          <iframe
            className="shadow-lg shadow-accent"
            width="800"
            height="450"
            src={contentURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="flex justify-between">
            <h2 className="font-montserrat font-bold text-xl tracking-wider bg-gradient-to-r from-purple-800 via-accent to-purple-600 inline-block text-transparent bg-clip-text">
              Video1: Let's start with kotlin
            </h2>
            <div className="flex gap-x-5 text-lg font-montserrat">
              <button className="module-border-wrap px-4 py-0.5 rounded-md text-violet-800 font-semibold">
                Previous
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-0.5 rounded-md font-semibold text-gray-900">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="transition-all duration-1000 bg-accent w-full list-none p-2 flex flex-col gap-y-2 rounded-md h-fit">
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
                    <button
                      onClick={() => setContentURL(contentsURL[0])}
                      className="cursor-pointer flex items-center gap-x-0.5"
                    >
                      <img className="w-5 h-5" src={check} alt="" />
                      <h4>Video1: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button
                      onClick={() => setContentURL(contentsURL[1])}
                      className="cursor-pointer flex items-center gap-x-0.5"
                    >
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video2: Let's start with kotlin</h4>
                    </button>
                  </summary>
                  <summary>
                    <button
                      onClick={() => setContentURL(contentsURL[2])}
                      className="cursor-pointer flex items-center gap-x-0.5"
                    >
                      <img className="w-5 h-5" src={lock} alt="" />
                      <h4>Video3: Let's start with kotlin</h4>
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
        </div>
      </div>
    </div>
  );
};

export default MyClass;
