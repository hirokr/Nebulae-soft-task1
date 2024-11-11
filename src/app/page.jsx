import Awards from "@/Components/Awards/Awards";
import ChooseUs from "@/Components/ChooseUs/ChooseUs";
import Contact from "@/Components/Contact/Contact";
import DownloadGuid from "@/Components/DownloadGuid/DownloadGuid";
import Footer from "@/Components/Footer/Footer";
import Guidance from "@/Components/Guidance/Guidance";
import HomeCard from "@/Components/homeCard/HomeCard";
import HorizontalLogoScroll from "@/Components/horizontalLogoScroll/horizontalLogoScroll";
import LocationDrop from "@/Components/LocationCard/LocationDrop";
import Questions from "@/Components/Questions/Questions";

export default function Home() {
  return (
    <main>
      <HomeCard />
      <section className="mt-[42rem]">
      <HorizontalLogoScroll />
      <section className="bg-gradient-to-b from-finding_background via-white to-finding_background ">

      <Guidance />
      <DownloadGuid />
      </section>
      <LocationDrop />
      <Questions />
      <Awards />
      <Contact />
      <Footer />
      </section>
      
    </main>
  );
}
