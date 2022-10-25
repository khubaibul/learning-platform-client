import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
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
            }
        ]
    }
])