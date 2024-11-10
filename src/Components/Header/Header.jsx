"use client"
import { useEffect,useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; 
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  return (
    <header className={`sticky top-0 h-[80px] border-b-2 px-10 mt-2 z-50 transition ease-in-out delay-150 ${scrolled ? "bg-[#14255f] " : "bg-transparent" }`}>
      <Navbar />
    </header>
  );
};

export default Header;
