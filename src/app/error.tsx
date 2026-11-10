"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">Что-то пошло не так</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{error.message}</p>
      <button
        type="button"
        className="rounded-md border px-4 py-2"
        onClick={reset}
      >
        Попробовать снова
      </button>
    </div>
  );
}
