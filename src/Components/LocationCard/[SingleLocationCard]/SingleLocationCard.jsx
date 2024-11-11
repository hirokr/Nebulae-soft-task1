"use client";
import Image from "next/image";
// import styles from './SingleLocationCard.module.css';

const SingleLocationCard = ({ prop }) => {
  const { name, order, src, text } = prop.image;
  const { expandedIndex, handleClick, index } = prop;

  return (
    <div
      onClick={() => handleClick(index)}
      className={`transition-all ease-in-out ${expandedIndex === index ? " wide:w-[50%]" : "wide:w-[20%]" } group w-full backgroundImage p-8 cursor-pointer  wide:h-[40rem]`}
    >
      <section className='wide:flex-col wide:justify-end wide:items-end '>
        <div className={`${expandedIndex === index ? " " : "flex items-center justify-start gap-5 wide:flex-col wide:justify-end wide:items-start"}`}>
          <h1 className={`${expandedIndex === index ? " text-gray-400 " : " text-finding_sec_bold group-hover:text-white"} text-4xl font-extrabold `}>
            {order}
          </h1>
          <h1 className = {`${expandedIndex === index ? " text-finding_sec_bold text-[2rem] font-bold" : " font-extrabold text-4xl  text-white"} `}>{name}</h1>
        </div>
        <div className={`${expandedIndex === index ? "block " : "hidden"}`}>
          <h3 className=" my-2">{text}</h3>
          <h2 className="font-semibold text-xl mb-2">CLIENTS:</h2>
          <div className="flex justify-start gap-2 items-start mb-6">
            <Image src='/SVG/rightBold.svg' height={10} width={10} alt='j' />
            <p>
              {name} Country Day School, Amold Jewelers, FieldEdge, Rollink,
              Barton G
            </p>
          </div>
          <div className='bg-white text-black  py-3 '>
            <div className='flex justify-start gap-2 text-md items-center mb-3 '>
              <Image src='/SVG/location.jpg' height={20} width={40} alt='j' />
              <p>
                17975 Collins Avenue <br />
                Sunny Isles Beach, FL 33160
              </p>
            </div>
            <div className='flex justify-start gap-1 text-finding_sec_bold font-bold text-xl items-center'>
              <Image src='/SVG/call.jpg' height={20} width={40} alt='j' />
              <p>(800) 206-9413</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleLocationCard;
