// import LoginPage from "../pages/LoginPage";

import HomePage from "../components/HomePage";

const adminRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "login",
  //   element: <LoginPage />,
  // },

  {
    path: "*",
    element: <>Error</>,
  },
];

export { adminRoutes };
