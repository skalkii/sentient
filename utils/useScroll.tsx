import { useState, useEffect } from "react";

const SCROLL_THRESHOLD = 10;

type UseScrollReturnTypes = {
  scrolled: boolean;
  scrollToFocus: (id: string) => void;
};

const useScroll = (): UseScrollReturnTypes => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  };

  const scrollToFocus = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: "end", inline: "nearest" });
    }
  };

  useEffect(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled, scrollToFocus };
};

export default useScroll;
