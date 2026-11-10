import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">Страница не найдена</h1>
      <Link className="underline underline-offset-4" href="/">
        На главную
      </Link>
    </div>
  );
}
