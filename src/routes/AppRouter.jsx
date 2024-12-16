import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact-Us/ContactUs";
import AboutUs from "../pages/About-Us/AboutUs";
import Brands from "../pages/Brands/Brands";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UseResetScroll from "../hooks/useResetScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UseResetScroll />
        <MainLayOut />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
