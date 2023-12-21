'use client'
import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export const AuthContext = createContext<{user: User | null}>({user: null});

export const useAuthContext = () => useContext(AuthContext);