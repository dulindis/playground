import React, { createContext, useContext, useReducer } from "react";

export interface User {
  id: number;
  name: string;
  userType: string;
}

// Define action types for user state updates
type ActionType = { type: "SET_USER"; payload: User | null };

interface UserContextType {
  user: User | null;
  dispatch: React.Dispatch<ActionType>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  dispatch: () => {},
});

// Define reducer function to update user state based on actions
const userReducer = (state: User | null, action: ActionType): User | null => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, dispatch] = useReducer(userReducer, null);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

// import React, { createContext, useContext, useState } from "react";

// export interface User {
//   id: number;
//   name: string;
//   userType: string;
// }

// interface UserContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// export const UserContext = createContext<UserContextType>({
//   user: null,
//   setUser: () => {},
// });

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// export const useUser = () => useContext(UserContext);
