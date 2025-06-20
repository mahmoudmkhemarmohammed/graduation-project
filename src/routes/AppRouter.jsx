import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayOut = lazy(() => import("../layouts/MainLayOut"));
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
const Contact = lazy(() => import("../pages/Contact-Us/ContactUs"));
const Brands = lazy(() => import("../pages/Brands/Brands"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const Products = lazy(() => import("../pages/Products/Products"));
const Categories = lazy(() => import("../pages/Categories/Categories"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Wishlist = lazy(() => import("../pages/Wishlist/Wishlist"));
const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
import UseResetScroll from "../hooks/useResetScroll";
const ProductsByPrefix = lazy(() =>
  import("../pages/ProductsByPrefix/ProductsByPrefix")
);
const ProtectedRoute = lazy(() =>
  import("../components/common/auth/ProtectedRoute")
);
const ProfileLayout = lazy(() => import("../layouts/ProfileLayout"));
const Account = lazy(() => import("../pages/account/Account"));
const AdminPanleLayout = lazy(() => import("../layouts/AdminPanleLayout"));
const AddCategories = lazy(() =>
  import("../components/eCommerce/Add/AddCategories")
);
const AddSubCategories = lazy(() =>
  import("../components/eCommerce/Add/AddSubCategories")
);
const AddBrand = lazy(() => import("../components/eCommerce/Add/AddBrand"));
const AddProduct = lazy(() => import("../components/eCommerce/Add/AddProduct"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UseResetScroll />
        <Suspense fallback={"جاري التحميل..."}>
          <MainLayOut />
        </Suspense>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "products/:productId",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:categoryId",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <ProductsByPrefix />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Contact />,
          </Suspense>
        ),
      },
      {
        path: "brands",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Brands />
          </Suspense>
        ),
      },
      {
        path: "brands/products/:brandId",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <ProductsByPrefix />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Register />,
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <AdminPanleLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={"Loading"}>
                <AddCategories />
              </Suspense>
            ),
          },
          {
            path: "subcategory",
            element: (
              <Suspense fallback={"جاري التحميل..."}>
                <AddSubCategories />
              </Suspense>
            ),
          },
          {
            path: "brand",
            element: (
              <Suspense fallback={"جاري التحميل..."}>
                <AddBrand />
              </Suspense>
            ),
          },
          {
            path: "product",
            element: (
              <Suspense fallback={"جاري التحميل..."}>
                <AddProduct />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={"جاري التحميل..."}>
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={"جاري التحميل..."}>
                <Account />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
