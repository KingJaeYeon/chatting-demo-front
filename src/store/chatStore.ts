import { create } from "zustand";

type Props = {
  data: any;
  dispatch: any;
  init: (data: any, dispatch: any) => void;
};

const useChatStore = create<Props>((setState) => ({
  data: {
    chatId: "null",
    user: {},
  },
  dispatch: "",
  init: (data, dispatch) => {
    setState({ data, dispatch });
  },
}));

export const useChatContext = () => useChatStore();
