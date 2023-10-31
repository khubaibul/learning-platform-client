import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PaymentSuccess from "../../Pages/CheckOut/PaymentSuccess";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/User/Login/Login";
import SignUp from "../../Pages/User/SignUp/SignUp";
import UserProfile from "../../Pages/User/UserProfile/UserProfile";
import About from "../../Shared/About/About";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyClasses from "../../Pages/MyClasses/MyClasses";
import MyClass from "../../Pages/MyClasses/MyClass";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://cse-from-home-server.vercel.app/courses"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://cse-from-home-server.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://cse-from-home-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(`https://cse-from-home-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/course/checkout/:_id/:course_price/:courseTitle",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success",
        element: (
          <PrivateRoute>
            {" "}
            <PaymentSuccess />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/user",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/my-class",
        element: <MyClass />,
      },
    ],
  },
]);
