import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./style.scss";

import { QueryProvider } from "./context/QueryProvider.tsx";
import { useAuthContext } from "./store/authStore.ts";
import { Login } from "./page/Login.tsx";
import { Register } from "./page/Register.tsx";
import { ChatContext } from "./context/ChatContext.tsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme-provider.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import Root from "@/page/Root.tsx";
import ErrorPage from "@/page/ErrorPage.tsx";
import { Home } from "@/page/Home.tsx";

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
            <Root />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      >
        <Route index element={<Navigate replace to="/@me" />} />
        <Route element={<Home />} path={"/@me"} />
        <Route element={<div>/@me/:id</div>} path={"/@me/:id"} />
        <Route element={<div>:id</div>} path={"/:id"} />

        <Route element={<div>fdsf</div>} path={"/h"} />
      </Route>
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
          <TooltipProvider>
            <Toaster />
            <RouterProvider router={router} />
          </TooltipProvider>
        </ThemeProvider>
      </ChatContext>
    </QueryProvider>
  );
}

export default App;
