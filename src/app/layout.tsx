import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <div className="glow glow-1" />
          <div className="glow glow-2" />
          <div className="glow glow-3" />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
