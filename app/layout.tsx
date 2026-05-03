import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeNovel — Track Typing Progress Through Classic Literature",
  description: "Gamified typing practice through famous novels with real-time WPM tracking, chapter progress saving, and comprehension quizzes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b3ae46d-66f6-4fda-8551-b474a1c16385"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
