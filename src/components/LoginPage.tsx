import React from "react";
import { useUser } from "../context/userContext";

const LoginPage = () => {
  const { user, dispatch } = useUser();

  const updateUser = () => {
    dispatch({
      type: "SET_USER",
      payload: {
        id: 1,
        name: "john",
        userType: "admin",
      },
    });
  };
  return (
    <div>
      <div>Login page</div>
      <button onClick={updateUser}>Hello {user ? user.name : "Visitor"}</button>
    </div>
  );
};

export default LoginPage;
