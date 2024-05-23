"use client";

import { UseAnimation, fadeInSlideUp } from "@/utils/useAnimation";

export default function Template({ children }: { children: React.ReactNode }) {
  return <UseAnimation animation={fadeInSlideUp}>{children}</UseAnimation>;
}
