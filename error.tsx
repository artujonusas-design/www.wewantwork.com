"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // ✅ Safe logging strategy
    // Dev: full visibility
    // Prod: silent (no leaks, no assumptions)
    if (process.env.NODE_ENV === "development") {
      console.error("Route error:", error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-xl font-semibold">Something went wrong</h1>

        <p className="text-sm text-muted-foreground">
          This page ran into an unexpected issue. Please try again.
        </p>

        {/* Dev-only debug signal */}
        {process.env.NODE_ENV === "development" && error.digest && (
          <p className="text-xs text-red-500">Digest: {error.digest}</p>
        )}

        <div className="flex justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
