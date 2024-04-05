import { create } from "zustand";

type Props = {
  user: any;
  init: (user: any) => void;
};

const useAuthStore = create<Props>((setState, getState, store) => ({
  user: null,
  init: (user) => {
    setState({ user });
  },
}));

export const useAuthContext = () => useAuthStore();
