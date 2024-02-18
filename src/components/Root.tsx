import { Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useUser } from "../context/userContext";
import { useEffect } from "react";

const Root = () => {
  const { user, setUser } = useUser();
  useEffect(() => {
    console.log("rerender");
  }, user);
  return (
    <div>
      <PrivateRoute user={user}>
        <Outlet context={[user, setUser]} />
      </PrivateRoute>
    </div>
    // <div>
    //   <Outlet />
    // </div>
  );
};

export default Root;
