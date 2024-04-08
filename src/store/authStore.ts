import { create } from "zustand";
import { login, logout, register } from "../service/authService.ts";
import { Login, Register } from "../service/type/Auth.ts";

type Props = {
  user: any;
  isLogin: boolean;
  init: (user: any) => any;
  login: ({ email, password }: Login) => Promise<void>;
  register: ({ displayName, email, password, icon }: Register) => Promise<void>;
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
  register: async ({ email, password, icon, displayName }) => {
    await register({ displayName, email, password, icon });
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
