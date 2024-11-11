"use client";
import Image from "next/image";
import { useState } from "react";
import SingleLocationCard from "./[SingleLocationCard]/SingleLocationCard";

const desc =
  " Founded in Miami, Digital Silk helps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub while our global team serves brands from across the U.S. and internationally.";

const d = "rahul";

const images = [
  {
    src: "E:/WEB DEV/Nebulae-soft/task1/public/WEBP/locationImage.webp",
    alt: "Image 1",
    text: desc,
    name: "Miami",
    order: "01",
  },
  {
    src: "E:/WEB DEV/Nebulae-soft/task1/public/WEBP/locationImage.webp",
    alt: "Image 2",
    text: desc,
    name: "Miami",
    order: "02",
  },
  {
    src: "E:/WEB DEV/Nebulae-soft/task1/public/WEBP/locationImage.webp",
    alt: "Image 3",
    text: desc,
    name: "Miami",
    order: "03",
  },
  {
    src: "E:/WEB DEV/Nebulae-soft/task1/public/WEBP/locationImage.webp",
    alt: "Image 4",
    text: desc,
    name: "Miami",
    order: "04",
  },
];

const LocationDrop = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className=' w-full flex flex-col  justify-center items-center bg-gradient-to-r from-[#4c8cee] to-[#723fc6] pb-10 '>
      <h1 className='text-4xl font-bold my-10'>Locations</h1>
      <p className="w-[90%] mb-10 text-2xl font-semibold text-center">
        With multiple locations throughout the United States, Digital Silk
        delivers localized strategies that complement your brand&#x27;s national
        presence.
      </p>
      <div className='w-[90%] flex flex-col gap-10 wide:flex-row  wide:justify-between'>
        {images.map((image, index) => (
          <SingleLocationCard key={index} prop={{image, expandedIndex, handleClick, index}}  />
        ))}
      </div>
    </div>
  );
};

export default LocationDrop;
