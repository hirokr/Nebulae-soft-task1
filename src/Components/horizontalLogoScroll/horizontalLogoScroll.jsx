import Image from "next/image";
import styles from "./horizontalLogoScroll.module.css";
import { companyLogo } from "@/Lib/data";



const HorizontalLogoScroll = () => {
  const {file, mainPath} = companyLogo

  console.log(mainPath)
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
      {file.map((path, index) =>{
        return (
          <Image
            key={index}
            src={`/companyLogo/${path}`}
            alt='rahul'
            height={100}
            width={160}
            className={styles.logo}
          />
        );
      })}
      </div>
    </div>
  );
};

export default HorizontalLogoScroll;
