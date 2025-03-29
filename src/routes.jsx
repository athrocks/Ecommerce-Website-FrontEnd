import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import { loadProductBySlug } from "./routes/products";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ShopApplicationWrapper />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
        {
          path: "/women",
          element: <ProductListPage categoryType={"WOMEN"} />,
        },
        {
          path: "/men",
          element: <ProductListPage categoryType={"MEN"} />,
        },
        {
          path: "/product/:slug",
          loader: loadProductBySlug,
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/v1/",
      element: <AuthenticationWrapper />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/oauth2/callback",
      element: <OAuth2LoginCallback />,
    }
  ],
  {
    future: {
      v7_startTransition: true, // Enables React.startTransition for better state updates
      v7_relativeSplatPath: true, // Uses the new relative path resolution for splat routes
    },
  }
);

export default router;
