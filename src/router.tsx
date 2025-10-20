import { createBrowserRouter, redirect } from "react-router";
import LandingPage from "./features/landing/pages/LandingPage";
import SignUpPage from "./features/auth/pages/SignUpPage";
import SignInPage from "./features/auth/pages/SignInPage";
import ForgotPasswordPage from "./features/auth/pages/ForgotPasswordPage";
import UpdatePasswordPage from "./features/auth/pages/UpdatePasswordPage";
import LayoutPage from "./shared/components/LayoutPage";
import DiscoverPage from "./features/discover/pages/DiscoverPage";
import secureLocalStorage from "react-secure-storage";
import { AUTH_KEY } from "./shared/utils/constant";
import DetailGroupPage from "./features/discover/pages/DetailGroupPage";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <LandingPage/>
    },
    {
        path:'/sign-up',
        loader:()=>{
            const auth = secureLocalStorage.getItem(AUTH_KEY)
            if (auth) {
                throw redirect("/home/discover")
            }
            return true
        },
        element: <SignUpPage/>
    },
    {
        path:'/sign-in',
        loader:()=>{
            const auth = secureLocalStorage.getItem(AUTH_KEY)
            if (auth) {
                throw redirect("/home/discover")
            }
            return true
        },
        element: <SignInPage/>
    },
    {
        path:'/forgot-password',
        loader:()=>{
            const auth = secureLocalStorage.getItem(AUTH_KEY)
            if (auth) {
                throw redirect("/home/discover")
            }
            return true
        },
        element:<ForgotPasswordPage/>
    },
    {
        path:'/forgot-password/:token',
        loader:()=>{
            const auth = secureLocalStorage.getItem(AUTH_KEY)
            if (auth) {
                throw redirect("/home/discover")
            }
            return true
        },
        element:<UpdatePasswordPage/>

    },
    {
        path:'/home',
        loader:()=>{
            const auth = secureLocalStorage.getItem(AUTH_KEY)
            if (!auth) {
                throw redirect("/sign-in")
            }
            return true
        },
        element:<LayoutPage/>,
        children:[
            {
                path:"/home/discover",
                element:<DiscoverPage/>
            },
            {
                path:"/home/discover/group/:groupId",
                element:<DetailGroupPage/>
            },
        ]
    }
])


export default Router