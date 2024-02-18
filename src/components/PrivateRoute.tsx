import { Navigate } from "react-router-dom";
// import { useUser } from "../context/userContext";

const PrivateRoute = ({ user, children }) => {
  //   const { user } = useUser();

  if (!user) {
    return (
      <Navigate
        to="login"
        replace
      />
    );
  }
  return { children };
};

export default PrivateRoute;
