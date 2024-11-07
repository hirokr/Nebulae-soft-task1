import Awards from "@/Components/Awards/Awards";
import ChooseUs from "@/Components/ChooseUs/ChooseUs";
import Contact from "@/Components/Contact/Contact";
import DownloadGuid from "@/Components/DownloadGuid/DownloadGuid";
import Footer from "@/Components/Footer/Footer";
import Guidance from "@/Components/Guidance/Guidance";
import HorizontalLogoScroll from "@/Components/horizontalLogoScroll/horizontalLogoScroll";
import LocationDrop from "@/Components/LocationCard/LocationDrop";
import Questions from "@/Components/Questions/Questions";

export default function Home() {
  return (
    <div>
      <HorizontalLogoScroll/>
      <Guidance/>
      <Awards/>
      <DownloadGuid/>
      <ChooseUs/>
      <LocationDrop/>
      <Questions/>
      <Contact/>
      <Footer/>

    </div>
  );
}
