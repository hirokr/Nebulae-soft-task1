import Image from "next/image";
import styles from "./Awards.module.css";

const Awards = () => {
  return (
    <div className="bg-gradient-to-b from-[#000429] to-[#00042a] py-28 px-10 flex flex-col justify-end items-center">
      <h3 className="pb-3 text-xl font-bold">OUR EXPERTS HAVE WON INDUSTRY AWARDS</h3>
      <h1 className="pb-16 text-[2.8rem] font-bold">Recognized Web Design Experts</h1>
      <h2 className="text-[1.5rem] font-bold">AWARDS</h2>
      <div className="h-1 w-[35rem] mt-3  mb-10 rounded bg-white"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <Image src="/SVG/rightBold.svg" height={10}
          width={10}
          alt='award4' />
      </button>
    </div>
  );
};

export default Awards;
