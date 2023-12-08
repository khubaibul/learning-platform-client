import React, { useContext, useEffect, useState } from "react";
import email from "../../../Assets/email.png";
import photo from "../../../Assets/photo.png";
import googleLogo from "../../../Assets/google.png";
import gitHubLogo from "../../../Assets/github.png";
import facebookLogo from "../../../Assets/facebook.png";
import bg from "../../../Assets/website-bg-another.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Spinner from "../../../Shared/Spinner/Spinner";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [accepted, setAccepted] = useState(false);
  const {
    createUser,
    updateUserProfile,
    emailVerify,
    theme,
    user,
    setLoading,
    signInWithGoogle,
    signInWithGitHub,
    signInWithFacebook,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/user";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const image = form.image.files[0];
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    if (userPassword.length < 6) {
      setErr("Password should be more than 6 character...");
      return;
    }
    // Upload Image Into Cloudinary
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "CSE_From_Home");
    data.append("cloud_name", "dou96vwyp");

    setIsLoading(true);

    fetch("https://api.cloudinary.com/v1_1/dou96vwyp/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.secure_url) {
          createUser(userEmail, userPassword)
            .then((result) => {
              // toast.success("User Created Successfully");
              handleUpdateUserProfile({ userName, userPhotoURL: data.url });
              setIsLoading(false);
              form.reset();
              toast.success("SignUp Successful...!");
              navigate(from, { replace: true });
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
              toast.error(err.message.slice(10));
            });
        }
      });
  };

  const handleTermsAndConditions = (e) => {
    setAccepted(e.target.checked);
  };

  const handleUpdateUserProfile = ({ userName, userPhotoURL }) => {
    const profile = {
      displayName: userName,
      photoURL: userPhotoURL,
    };
    updateUserProfile(profile)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

  const handleEmailVerification = () => {
    emailVerify()
      .then((result) => {})
      .catch((err) => {
        console.error(err);
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
  }, [user, from, navigate]);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={`bg-cover bg-no-repeat bg-center font-publicSans pt-16 pb-14 overflow-hidden flex items-center lg:justify-start md:justify-start justify-center`}
    >
      <div className="lg:ml-40 md:ml-20 lg:w-[35%] md:w-[45%]">
        <div
          className={`relative bg-gradient-to-tr from-[#A12350] via-[#60277B] to-[#362298] shadow-2xl rounded-md`}
        >
          <div className="bg-gradient-to-tr from-[#A12350] via-[#60277B] to-[#362298] border-4 border-red-600 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#EF4444">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>
          <form
            onSubmit={handleSignUp}
            className="lg:p-14 lg:pb-6 p-4 pt-10 flex flex-col gap-y-4 lg:gap-y-0 md:gap-y-2"
          >
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                type="text"
                name="name"
                required="required"
                id="name"
                className="bg-gray-200 pl-12 lg:py-4 md:py-2 focus:outline-none w-full rounded"
                placeholder="Username Full Name"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8 bg-gray-200 rounded">
              <img
                className="absolute ml-3"
                width="24"
                viewBox="0 0 24 24"
                src={photo}
                alt=""
              />
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full p-2 pl-12 focus:outline-primary bg-gray-light"
                required={true}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <img
                className="absolute ml-3"
                width="24"
                viewBox="0 0 24 24"
                src={email}
                alt=""
              />
              <input
                type="email"
                name="email"
                required="required"
                id="email"
                className="bg-gray-200 pl-12 lg:py-4 md:py-2 focus:outline-none w-full rounded"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
                className="bg-gray-200 pl-12 lg:py-4 md:py-2 focus:outline-none w-full rounded"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="form-control">
                <label className="label cursor-pointer flex justify-center gap-x-2">
                  <input
                    onClick={handleTermsAndConditions}
                    type="checkbox"
                    className={`checkbox border-2 border-[#f25189]`}
                  />
                  <span className={`label-text text-[#f25189]`}>
                    Accept Terms & Conditions
                  </span>
                </label>
              </div>
              <p className="text-right mb-1">
                <Link className={`text-xs text-[#f25189]`} to="/login">
                  Already have an account?
                  <span className="underline ml-1 text-base">Login</span>
                </Link>
              </p>
            </div>
            <button
              disabled={!accepted}
              className="hover:bg-gradient-to-l from-[#A12350] via-[#60277B] to-[#362298] border-2 border-[#A12350] font-medium font-publicSans tracking-widest lg:py-4 md:py-2 text-[#f25189] w-full rounded transition-all duration-300"
            >
              {isLoading ? <Spinner borderColor={"#EF4444"} /> : "Sign Up"}
            </button>
          </form>
          <div className="flex justify-center gap-x-2 pb-4">
            <button onClick={handleSignInWithGoogle}>
              <img
                className="w-8 h-8 bg-[#362298] rounded-full p-0.5"
                src={googleLogo}
                alt=""
              />
            </button>
            <button onClick={handleSignInWithGitHub}>
              <img
                className="w-8 h-8 bg-[#A12350] rounded-full p-0.5"
                src={gitHubLogo}
                alt=""
              />
            </button>
            <button onClick={handleSignInWithFacebook}>
              <img
                className="w-8 h-8 bg-[#A22350] rounded-full p-0.5"
                src={facebookLogo}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
