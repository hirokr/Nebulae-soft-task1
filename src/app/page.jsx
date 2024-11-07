import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import HorizontalLogoScroll from "@/Components/horizontalLogoScroll/horizontalLogoScroll";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HorizontalLogoScroll/>
      <Contact/>
      <Footer/>
    </div>
  );
}
