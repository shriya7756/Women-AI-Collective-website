import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Women AI Collective - First AI Literacy Platform for Women",
  description: "Designed specifically for women from both non-tech and tech to become AI-literate and AI-fluent. Building equality in an AI-first world.",
  keywords: ["AI literacy", "women in tech", "AI education", "women empowerment", "AI fluency"],
  authors: [{ name: "Women AI Collective" }],
  openGraph: {
    title: "Women AI Collective - First AI Literacy Platform for Women",
    description: "Designed specifically for women from both non-tech and tech to become AI-literate and AI-fluent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
