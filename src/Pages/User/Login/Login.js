import React, { useEffect, useState } from "react";
import googleLogo from "../../../Assets/google.png";
import gitHubLogo from "../../../Assets/github.png";
import facebookLogo from "../../../Assets/facebook.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [err, setErr] = useState("");
  const {
    loginUser,
    setLoading,
    signInWithGoogle,
    signInWithGitHub,
    signInWithFacebook,
    user,
    theme,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const userEmail = form.email.value;
    const userPassword = form.password.value;

    loginUser(userEmail, userPassword)
      .then((result) => {
        console.log(result.user);
        setErr("");
        toast.success("Login Successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErr(err.message);
        toast.error(err.message.slice(10));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login With Google Successfully..");
      })
      .catch((err) => {
        toast.error(err.message.slice(10));
      });
  };

  const handleSignInWithGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        toast.success("Login With Google Successfully..");
      })
      .catch((err) => {
        toast.error(err.message.slice(10));
      });
  };

  const handleSignInWithFacebook = () => {
    signInWithFacebook()
      .then((result) => {
        toast.success("Login With Google Successfully..");
      })
      .catch((err) => {
        toast.error(err.message.slice(10));
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div
      className={`${
        theme ? "bg-gray-900" : "bg-yellow-400"
      }  h-screen overflow-hidden flex items-center justify-center`}
    >
      <div
        className={`${
          theme ? "bg-slate-700" : "bg-white"
        } lg:w-5/12 md:6/12 w-10/12 shadow-3xl`}
      >
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </div>
        <form onSubmit={handleLogin} className="p-12 md:p-24">
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="email"
              id="username"
              name="email"
              required="required"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username/Email"
            />
          </div>
          <div className="flex items-center text-lg md:mb-8">
            <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input
              type="password"
              name="password"
              required="required"
              id="password"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
            />
          </div>
          <p className="text-right mb-1">
            <Link
              className={`text-xs ${theme && "text-slate-300"}`}
              to="/signup"
            >
              New Here?
              <span className="underline ml-1 text-base">Signup</span>
            </Link>
          </p>
          <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium font-montserrat p-2 md:p-4 text-white uppercase w-full">
            Login
          </button>
        </form>
        <div className="flex justify-center gap-x-2 pb-5 -mt-14">
          <button onClick={handleSignInWithGoogle}>
            <img className="w-7" src={googleLogo} alt="" />
          </button>
          <button onClick={handleSignInWithGitHub}>
            <img className="w-7" src={gitHubLogo} alt="" />
          </button>
          <button onClick={handleSignInWithFacebook}>
            <img className="w-7" src={facebookLogo} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
