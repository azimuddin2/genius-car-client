import Main from "../layout/Main/Main";
import Checkout from "../pages/Service/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ServiceDetails from "../pages/Service/ServiceDetails/ServiceDetails";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/Service/Orders/Orders";
import Cart from "../pages/Product/Cart/Cart";
import MoreServices from "../pages/Service/MoreServices/MoreServices";
import MoreProducts from "../pages/Product/MoreProducts/MoreProducts";
import PaymentSuccess from "../pages/Payment/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/Payment/PaymentFail/PaymentFail";
import DisplayError from "../pages/Shared/DisplayError/DisplayError";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <MoreServices></MoreServices>
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
                path: 'order',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: '/payment/fail',
                element: <PaymentFail></PaymentFail>
            },
            {
                path: 'products',
                element: <MoreProducts></MoreProducts>
            },
            {
                path: 'cart',
                element: <PrivateRoute>
                    <Cart></Cart>
                </PrivateRoute>
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
            },
        ]
    },
]);

export default router;