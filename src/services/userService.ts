import { apiRequest } from "@/lib/api";
import type { User } from "@/types/user";

export function getUsers() {
  return apiRequest<User[]>("/users");
}
