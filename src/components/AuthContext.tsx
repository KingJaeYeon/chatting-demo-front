import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../store/authStore.ts";

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { init } = useAuthContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("AuthContextProvider");
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      init(user);
      setLoading(false);
    });
    return () => {
      console.log(auth);
      unsub();
    };
  }, [init]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
