import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sleep } from "../utils/sleep";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string,password:string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      login: async(_email,_password) => {
        const token = "fake-token";
        await sleep(300) 
        set({ isAuthenticated: true, token });
      },
      logout: () => {
        set({ isAuthenticated: false, token: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
