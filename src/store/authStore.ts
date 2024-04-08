import { create } from "zustand";
import { login, logout } from "../service/authService.ts";

type Props = {
  user: any;
  isLogin: boolean;
  init: (user: any) => any;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
};

const useAuthStore = create<Props>((setState) => ({
  user: null,
  isLogin: false,
  init: (user) => {
    setState({ user, isLogin: true });
  },
  login: async ({ email, password }) => {
    await login({ email, password });
    window.location.href = `${import.meta.env.VITE_WEB_URL}`;
  },
  logout: async () => {
    await logout().then(() => {
      setState({ isLogin: false, user: null });
      window.location.href = `${import.meta.env.VITE_WEB_URL}`;
    });
  },
}));

export const useAuthContext = () => useAuthStore();
