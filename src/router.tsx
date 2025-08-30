import { createBrowserRouter } from "react-router";
import LandingPage from "./features/landing/pages/LandingPage";
import SignUpPage from "./features/auth/pages/SignUpPage";
import SignInPage from "./features/auth/pages/SignInPage";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <LandingPage/>
    },
    {
        path:'/sign-up',
        element: <SignUpPage/>
    },
    {
        path:'/sign-in',
        element: <SignInPage/>
    },
])


export default Router