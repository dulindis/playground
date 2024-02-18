import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";
import router from "./routes/router";
// import Table from "./components/Table";
// import Form from "./components/Form";

function App() {
  return (
    <>
      {
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider> /* <Table /> */
      }
    </>
  );
}

export default App;
