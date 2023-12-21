import { ErrorType } from "@/types/types";
import { app } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const auth = getAuth(app);

export let currentUser: User | null = null

export const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
  } else {
    currentUser = null;
  }
});

export type Credentials = {
  email: string,
  password: string
}

export async function signUp({email, password}: Credentials) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e as ErrorType;
  }

  return { result, error };
}

export async function signIn({email, password}: Credentials) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e as ErrorType;
  }

  return { result, error };
}
