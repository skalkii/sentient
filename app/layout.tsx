import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/modules/navbar";

import "../styles/global.css";
import "../styles/_main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentient",
  description: "Open AGI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
