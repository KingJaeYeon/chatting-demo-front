import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./style.scss";
import { Home } from "./page/Home.tsx";

import { AuthContextProvider } from "./context/AuthContext.tsx";
import { useAuthContext } from "./store/authStore.ts";
import { Login } from "./page/Login.tsx";
import { Register } from "./page/Register.tsx";
import { ChatContext } from "./context/ChatContext.tsx";

const PrivateRoute = ({ children }: { children: any }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" />;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={"/"}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      ,
      <Route path={"/login"} element={<Login />} />,
      <Route path={"/register"} element={<Register />} />,
    </>,
  ),
);
function App() {
  return (
    <AuthContextProvider>
      <ChatContext>
        <RouterProvider router={router} />
      </ChatContext>
    </AuthContextProvider>
  );
}

export default App;
