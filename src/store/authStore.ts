"use client";

import { useSyncExternalStore } from "react";
import type { User } from "@/types/user";

type AuthState = {
  user: User | null;
};

type AuthStore = AuthState & {
  setUser: (user: User | null) => void;
  clearUser: () => void;
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => AuthState;
};

let state: AuthState = { user: null };
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

export const authStore: AuthStore = {
  get user() {
    return state.user;
  },
  setUser(user) {
    state = { user };
    emit();
  },
  clearUser() {
    state = { user: null };
    emit();
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return state;
  },
};

export function useAuthStore<T>(selector: (state: AuthState) => T): T {
  return useSyncExternalStore(
    authStore.subscribe,
    () => selector(authStore.getSnapshot()),
    () => selector(authStore.getSnapshot()),
  );
}
