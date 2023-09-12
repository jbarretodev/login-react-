import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  token: string | null;
  profile: any;
  isAuth: boolean;
};

type Action = {
  setToken: (token: string) => void;
  setProfile: (profile: unknown) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthStore & Action>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({ ...state, token, isAuth: true })),
      setProfile: (profile: unknown) => set((state) => ({ ...state, profile })),
      logout: () => set((state) => ({ ...state, token: null, isAuth: false })),
    }),
    {
      name: "auth",
    }
  )
);
