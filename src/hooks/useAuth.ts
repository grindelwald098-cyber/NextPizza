"use client";

import { authStore, useAuthStore } from "@/store/authStore";

export function useAuth() {
  const user = useAuthStore((state) => state.user);

  return {
    user,
    isAuthenticated: Boolean(user),
    setUser: authStore.setUser,
    clearUser: authStore.clearUser,
  };
}
