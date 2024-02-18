import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./routes";

// import ErrorPage from "../pages/ErrorPage";
// import SkeletonLoader from "../components/shared/SkeletonLoader";
import LoginPage from "../components/LoginPage.tsx";
import Root from "../components/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: SkeletonLoader,
    errorElement: <>something went wrong</>,
    children: adminRoutes,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export default router;
