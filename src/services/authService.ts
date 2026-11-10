import { apiRequest } from "@/lib/api";
import type { User } from "@/types/user";

export type LoginPayload = {
  email: string;
  password: string;
};

export function login(payload: LoginPayload) {
  return apiRequest<User>("/auth/login", {
    method: "POST",
    body: payload,
  });
}
