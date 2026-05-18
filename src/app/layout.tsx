import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RivhilAI — Build Your Brand",
  description: "AI-powered brand identity generation platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
