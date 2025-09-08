import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense, lazy} from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const UserPage = lazy(() => import("../pages/UserPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
import ShopLayout from "../components/Layout/ShopLayout";

const index = createBrowserRouter([
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "user", element: <UserPage />},
        ],
    },
    {path: "/login", element: <LoginPage />},
]);

export default index