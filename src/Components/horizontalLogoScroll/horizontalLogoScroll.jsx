import Image from "next/image";
import styles from "./horizontalLogoScroll.module.css";
import { companyLogo } from "@/Lib/data";

const HorizontalLogoScroll = () => {
  const { file, mainPath } = companyLogo;

  console.log(mainPath);
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {file.map((path, index) => {
          return (
            <dev key={index} className='h-[4rem] w-[16rem] px-15 relative'>
              <Image
                src={`/companyLogo/${path}`}
                alt='Company'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='cover px-10'
              />
            </dev>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalLogoScroll;
