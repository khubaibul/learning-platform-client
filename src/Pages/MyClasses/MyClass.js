import React, { useState } from "react";
import checked from "../../Assets/checked.png";
import lock from "../../Assets/lock.png";

const MyClass = ({ course }) => {
  const [contentURL, setContentURL] = useState(
    "https://www.youtube.com/embed/F9UC9DY-vIU?si=2V3IKmgh_ZbkiW1Q"
  );

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center mt-4 font-montserrat text-2xl font-bold tracking-wider">
        CSE From Home -{" "}
        <span className="italic font-extrabold bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text">
          Kotlin
        </span>
      </h1>
      <div className="flex my-10 gap-x-10">
        <div className="shadow-lg shadow-accent">
          <iframe
            width="800"
            height="450"
            src={contentURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="transition-all duration-1000 bg-accent w-full list-none p-2 flex flex-col gap-y-2">
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                </div>
              </details>
            </div>
          </details>
          <details className="outline rounded outline-slate-300 p-2 text-white">
            <summary className="cursor-pointer text-lg font-bold">
              Welcome TO Kotlin
            </summary>
            <div className="pl-4">
              <details>
                <summary className="cursor-pointer">
                  Module1: Understanding of kotlin
                </summary>
                <div className="pl-4">
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={checked} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
                  </summary>
                  <summary className="cursor-pointer flex items-center gap-x-0.5">
                    <img className="w-5 h-5" src={lock} alt="" />
                    <h4>Video1: Let's start with kotlin</h4>
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
