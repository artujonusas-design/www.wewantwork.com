"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  if (process.env.NODE_ENV === "development") {
    console.error("Global error:", error);
  }

  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <h1 style={{ fontSize: 20, fontWeight: 600 }}>Application error</h1>

          <p style={{ marginTop: 8, fontSize: 14, color: "#666" }}>
            A critical error occurred while loading the application. Please
            refresh the page.
          </p>

          {process.env.NODE_ENV === "development" && error.digest && (
            <p style={{ marginTop: 8, fontSize: 12, color: "#c00" }}>
              Digest: {error.digest}
            </p>
          )}

          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: "8px 16px",
              fontSize: 14,
              background: "#000",
              color: "#fff",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
