import { create } from "zustand";
import type { User } from "../types/LoginApi";

interface UserState extends User {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useUserStore = create<UserState>((set) => ({
  id: null,
  email: null,
  password_hash: null,
  full_name: null,
  phone: null,
  is_verified: null,
  created_at: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  setUser: (user: User) => {
    return set((state: UserState) => ({ ...state, ...user, isAuthenticated: true })) },
  clearUser: () =>
    set({
      id: null,
      email: null,
      password_hash: null,
      full_name: null,
      phone: null,
      is_verified: null,
      created_at: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    }),
}));
