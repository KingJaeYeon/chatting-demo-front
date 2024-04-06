import React, { useEffect, useReducer } from "react";
import { useAuthContext } from "../store/authStore.ts";
import { useChatContext } from "../store/chatStore.ts";

export function ChatContext({ children }: { children: React.ReactNode }) {
  const { user: currentUser } = useAuthContext();
  const { init } = useChatContext();
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser?.uid > action?.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  useEffect(() => {
    init(state, dispatch);
  }, [init, state]);

  return <React.Fragment>{children}</React.Fragment>;
}
