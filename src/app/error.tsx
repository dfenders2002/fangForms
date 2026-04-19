"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-heading">Er ging iets mis.</h2>
      <button
        onClick={reset}
        className="rounded bg-accent px-4 py-2 text-white hover:bg-accent-dark"
      >
        Opnieuw proberen
      </button>
    </div>
  );
}
