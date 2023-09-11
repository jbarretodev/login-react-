import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  token: string | null;
  profile: any;
};

type Action = {
  setToken: (token: string) => void;
  setProfile: (profile: unknown) => void;
};

export const useAuthStore = create(
  persist<AuthStore & Action>(
    (set) => ({
      token: null,
      profile: null,
      setToken: (token: string) => set((state) => ({ ...state, token })),
      setProfile: (profile: unknown) => set((state) => ({ ...state, profile })),
    }),
    {
      name: "auth",
    }
  )
);
