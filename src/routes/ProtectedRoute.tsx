import { Navigate } from "react-router-dom";
import { User } from "../context/userContext";
// import { useUser } from "../context/userContext";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

interface ProtectedRouteProps {
  user: User | null;
  redirectPath?: string; // Make redirectPath optional
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  redirectPath = "/login",
  children,
}) => {
  if (!user) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }
  return children;
};
