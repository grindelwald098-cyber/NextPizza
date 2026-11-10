import { LoginForm } from "@/components/features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold">Auth</h1>
      <LoginForm />
    </div>
  );
}
