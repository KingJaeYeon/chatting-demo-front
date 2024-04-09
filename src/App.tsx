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

import { QueryProvider } from "./context/QueryProvider.tsx";
import { useAuthContext } from "./store/authStore.ts";
import { Login } from "./page/Login.tsx";
import { Register } from "./page/Register.tsx";
import { ChatContext } from "./context/ChatContext.tsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme-provider.tsx";

const PrivateRoute = ({ children }: { children: any }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/sign-in" />;
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
      <Route path={"/sign-in"} element={<Login />} />,
      <Route path={"/sign-up"} element={<Register />} />,
    </>,
  ),
);
function App() {
  return (
    <QueryProvider>
      <ChatContext>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ChatContext>
    </QueryProvider>
  );
}

export default App;
