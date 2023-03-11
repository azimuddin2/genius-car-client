import Main from "../layout/Main/Main";
import Checkout from "../pages/Service/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ServiceDetails from "../pages/Service/ServiceDetails/ServiceDetails";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`)
                }
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);

export default router;