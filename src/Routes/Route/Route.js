import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/User/Login/Login";
import SignUp from "../../Pages/User/SignUp/SignUp";
import UserProfile from "../../Pages/User/UserProfile/UserProfile";
import About from "../../Shared/About/About";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://cse-from-home-server.vercel.app/courses")
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch("https://cse-from-home-server.vercel.app/courses")
            },
            {
                path: "/course/:id",
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://cse-from-home-server.vercel.app/course/${params.id}`)
            },
            {
                path: "/course/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://cse-from-home-server.vercel.app/course/${params.id}`)
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/user",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])