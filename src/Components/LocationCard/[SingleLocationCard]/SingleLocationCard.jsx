"use client";
import Image from "next/image";
// import styles from './SingleLocationCard.module.css';

const SingleLocationCard = ({ prop }) => {
  const { name, order, src, d } = prop.image;
  const { expandedIndex, handleClick, index } = prop;

  return (
    <div
      onClick={() => handleClick(index)}
      className='group w-full backgroundImage p-8 cursor-pointer transition-all ease-in-out'
    >
      <div>
        <div className={`${expandedIndex === index ? " " : "flex items-center justify-start gap-5 hover:text-finding_sec_bold"}`}>
          <h1 className={`${expandedIndex === index ? " text-gray-400 " : " text-finding_sec_bold group-hover:text-white"} text-4xl font-extrabold `}>
            {order}
          </h1>
          <h1 className = {`${expandedIndex === index ? " text-finding_sec_bold text-[2rem] font-bold" : " font-extrabold text-4xl  text-white"} `}>{name}</h1>
        </div>
        <div className={`${expandedIndex === index ? "block " : "hidden"}`}>
          <h3>{d}</h3>
          <h2>CLIENTS:</h2>
          <div>
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
      </div>
    </div>
  );
};

export default SingleLocationCard;
