import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";

import ShoppingCart from "../Components/Cart/Cart";


import EmptyCart from "../Components/Cart/EmptyCart";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import ResetPassword from "../Components/User/ResetPassword";
import ConfirmPassword from "../Components/User/ConfirmPassword";

import ShoppingCart1 from "../Components/Cart/Cart1";


import Checkout from "../Components/Checkout/Checkout";
import CheckoutMain from "../Components/Checkout/CheckoutMain";

import Wishlist from "../Components/User/MyProfile/Wishlist";
import LoginWithOTP from "../Components/User/LoginWithOTP";
import ManageAddress from "../Components/User/MyProfile/ManageAddress";
import ErrorPage from "../Pages/404Page";
import Navbar3 from "../Components/Navbar/Navbar3";
import Navbar4 from "../Components/Navbar/Navbar4";



import NewProduct from "../Components/products/AddProducts";

import OrdersPage from "../Components/AdminDashboard/OrdersPage";

import CustomerDetails from "../Components/AdminDashboard/CustomerDetails";
import CustomerPage from "../Components/AdminDashboard/Customerpage";

import AdminMainContent from "../Components/AdminDashboard/AdminMainContent";
import GridLayout from "../Layout/Layout1";
import ExportTransactions from "../Pages/ExportTransactions";
import OtpVerification from "../Components/User/OtpVerification";
import ProductList from "../Components/products/ProductList";
import SidebarMain from "../Components/Sidebar/SidebarMain";
import RightProfileDiv from "../Components/User/MyProfile/RightProfileDiv";
import UserOrder from "../Components/User/MyProfile/UserOrder";
import Sidebar from "../Components/Sidebar/Sidebar";
import Card from "../Components/Card/Card";
import CategoryFilter from "../Components/CategoryFilter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/cart",
    element: <ShoppingCart />
  },
  {
    path: "/profile",
    element: <RightProfileDiv />
  },
  {
    path: "/profile/address",
    element: <ManageAddress />
  },
  {
    path: "/emptycart",
    element: <EmptyCart />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/verify-otp",
    element: <LoginWithOTP />
    // element: <OtpVerification />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "reset",
    element: <ResetPassword />
  },
  {
    path: "/confirm",
    element: <ConfirmPassword />
  },
  {
    path: "/team",
    element: <Card/>
  },
  {
    path: "/cart1",
    element: <ShoppingCart1 />
  },

  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/checkout1",
    element: <CheckoutMain />
  },
  {
    path: "/wishlist",
    element: <Wishlist />
  },
  {
    path: "/myorder",
    element: <UserOrder/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
  {
    path: "nav",
    element: <Navbar3/>
  },
  {
    path: "nav4",
    element: <Navbar4 />
  },
  {
    path: "/dashboard",
    element: <AdminMainContent/>
  },
  {
    path: "sidebar",
    element: <Sidebar/>
  },
  {
    path: "sidebar2",
    element: <SidebarMain/>
  },
  {
    path: "/shop/addproducts",
    element: <NewProduct/>
  },
  {
    path: "/shop/productslist",
    element: <ProductList/>
  },
  {
    path: "/shop/orders",
    element: <OrdersPage/>
  },
  {
    path: "/shop/customers",
    element: <CustomerPage/>
  },
  {
    path: "/shop/customersdetails",
    element: <CustomerDetails/>
  },
  {
    path: "/layout1",
    element: <GridLayout/>
  },
  {
    path: "/export",
    element: <ExportTransactions />
  },
  {
    path: "/filter",
    element: <CategoryFilter/>
  }
]);
export default router;
