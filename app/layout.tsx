import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/modules/navbar";

import "../styles/global.css";
import "../styles/_main.scss";
import classNames from "classnames";
import styles from "./page.module.scss";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

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
      <body className={classNames(inter.className, styles.backgroundColor)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
