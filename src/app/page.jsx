import Awards from "@/Components/Awards/Awards";
import Contact from "@/Components/Contact/Contact";
import DownloadGuid from "@/Components/DownloadGuid/DownloadGuid";
import Footer from "@/Components/Footer/Footer";
import Guidance from "@/Components/Guidance/Guidance";
import HorizontalLogoScroll from "@/Components/horizontalLogoScroll/horizontalLogoScroll";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HorizontalLogoScroll/>
      <Guidance/>
      <Awards/>
      <DownloadGuid/>
      <Contact/>
      <Footer/>

    </div>
  );
}
