import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Register } from "./page/Register.tsx";
import "./style.scss";
import { Login } from "./page/Login.tsx";
import { Home } from "./page/Home.tsx";

import { AuthContextProvider } from "./components/AuthContext.tsx";
import { useAuthContext } from "./store/authStore.ts";

const router = createBrowserRouter([
  { path: "/", Component: Home, index: true },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);
function App() {
  const { user } = useAuthContext();
  console.log("user::", user);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
