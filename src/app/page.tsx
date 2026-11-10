import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Frontend пиццерии
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Каркас приложения готов. Дальше собираем экраны в{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              src/app
            </code>
            .
          </p>
          <div className="flex gap-4 text-base font-medium">
            <Link
              className="underline underline-offset-4"
              href="/login"
            >
              Вход
            </Link>
            <Link
              className="underline underline-offset-4"
              href="/register"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
