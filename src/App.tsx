import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Register } from "./page/Register.tsx";
import "./style.scss";
import { Login } from "./page/Login.tsx";
import { Home } from "./page/Home.tsx";

const router = createBrowserRouter([
  { path: "/", Component: Home, index: true },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
