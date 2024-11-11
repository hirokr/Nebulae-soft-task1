import Image from "next/image";


const Awards = () => {
  return (
    <div className="bg-gradient-to-b from-[#000429] to-[#00042a] py-28 px-10 flex flex-col justify-end items-center">
      <h3 className="pb-3 text-xl font-bold">OUR EXPERTS HAVE WON INDUSTRY AWARDS</h3>
      <h1 className="pb-16 text-[2.8rem] font-bold">Recognized Web Design Experts</h1>
      <h2 className="text-[1.5rem] font-bold">AWARDS</h2>
      <div className="h-1 w-[35rem] mt-3  mb-10 rounded bg-white"></div>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <Image className="w-40 m-2"
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        <Image className="w-40 m-2"
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        <Image className="w-40 m-2"
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        <Image className="w-40 m-2"
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        <Image className="w-40 m-2"
          src={`/WEBP/178.webp`}
          height={100}
          width={100}
          alt='award1'
        />
        
      </div>
      <h1 className="text-2xl mt-5 font-bold ">Recognition</h1>
      <div className="h-1 w-[35rem] mt-5 rounded bg-gray-500"></div>
      <h1 className="text-2xl font-bold mt-5">Expertise</h1>
      <div className="h-1 w-[35rem] mt-5  mb-5 rounded bg-gray-500"></div>
      <button className="button relative overflow-hidden px-8 py-4 wide:px-12 wide:py-8 border-none font-bold tracking-widest uppercase text-[#2f3f83] bg-white transition-all duration-1000 text-[15px] wide: text-xl wide:mt-4 hover:text-white flex justify-center items-center gap-4`">
        <h1 className="mr-2">REQUEST A QUOTE </h1>
        <Image src="/SVG/rightBold.svg" height={10}
          width={10}
          alt='award4' />
      </button>
    </div>
  );
};

export default Awards;
