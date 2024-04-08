import { create } from "zustand";
import { logout } from "../service/authService.ts";

type Props = {
  user: any;
  isLogin: boolean;
  init: (user: any) => any;
  logout: () => Promise<void>;
};

const useAuthStore = create<Props>((setState) => ({
  user: null,
  isLogin: false,
  init: (user) => {
    setState({ user, isLogin: true });
  },
  logout: async () => {
    await logout().then(() => {
      setState({ isLogin: false, user: null });
      window.location.href = `${import.meta.env.VITE_WEB_URL}`;
    });
  },
}));

export const useAuthContext = () => useAuthStore();
