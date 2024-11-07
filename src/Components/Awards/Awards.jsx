import Image from "next/image";
import styles from "./Awards.module.css";

const Awards = () => {
  return (
    <div className={styles.container}>
      <h3>OUR EXPERTS HAVE WON INDUSTRY AWARDS</h3>
      <h1>Recognized Web Design Experts</h1>
      <h2>AWARDS</h2>
      <div>
        <Image
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        <Image
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award2'
        />
        <Image
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award3'
        />
        <Image
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award4'
        />
        <Image
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award5'
        />
      </div>
      <h1>Recognition</h1>
      <h1>Expertise</h1>
      <button>REQUEST A QUOTE 
        <Image src="/SVG/8.svg" height={10}
          width={10}
          alt='award4' />
      </button>
    </div>
  );
};

export default Awards;
