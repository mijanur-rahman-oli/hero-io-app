import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/apps", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/installation", element: <Installation /> },
    ],
  },
]);

export default router;

