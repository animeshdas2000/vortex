import React, { createContext, useEffect, useState } from "react";
import { auth } from "../services/Auth";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
