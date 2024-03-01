import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StarCanvas from "./components/Starbg";
import Nav from "./components/Nav";
import { UIProviders } from "./providers/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-auto overflow-x-hidden scroll-smooth">
        <StarCanvas />

        <UIProviders>{children}</UIProviders>
      </body>
    </html>
  );
}
