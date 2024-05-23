"use client";

import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavigationIconType = {
  href: string;
  icon: string;
};

const NAVIGATION_ITEMS: NavigationIconType[] = [
  {
    href: "/",
    icon: "/assets/icons/logo.svg",
  },
  {
    href: "/leaderboard",
    icon: "/assets/icons/leaderboard.svg",
  },
  {
    href: "/discussion",
    icon: "/assets/icons/discussion.svg",
  },
  {
    href: "/submission",
    icon: "/assets/icons/submission.svg",
  },
  {
    href: "/profile",
    icon: "/assets/icons/userIcon.svg",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <header>
      <nav className={styles.navbarContainer}>
        {NAVIGATION_ITEMS.map(({ href, icon }, index) => {
          return (
            <Link className={styles.navSingle} key={`nav-${index}`} href={href}>
              <Image
                className={
                  path !== href && href !== "/" ? styles.darkFill : undefined
                }
                width={30}
                height={30}
                src={icon}
                alt={href}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
