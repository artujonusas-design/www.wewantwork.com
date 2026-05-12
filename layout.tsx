// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@/app/providers/storeProvider";
import AuthInitializer from "@/app/_components/AuthInitializer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import GoogleTranslate from "./_components/GoogleTranslate";
import GlobalErrorBoundary from "./_components/GlobalErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Application",
  description: "Your application description",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen w-full bg-accent-light-2 antialiased">
        <GlobalErrorBoundary>
          <StoreProvider>
            <AuthInitializer>
              <GoogleTranslate />
              <div id="gt-root">{children}</div>

              <div id="gt-skeleton" aria-hidden />
              <ToastContainer theme="dark" />
            </AuthInitializer>
          </StoreProvider>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
