import Link from "next/link";
import { routes } from "@/config/routes";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <Link href={routes.home} className="font-semibold">
        Pizza
      </Link>
      <nav className="flex gap-4 text-sm">
        <Link href={routes.login}>Вход</Link>
        <Link href={routes.register}>Регистрация</Link>
      </nav>
    </header>
  );
}
