'use client'
import Image from "next/image";
import styles from "./LocationDrop.module.css";
import SingleLocationCard from "./[SingleLocationCard]/SingleLocationCard";
import { useState } from "react";

const images = [
  { src: "image1.jpg", alt: "Image 1", text: "Image 1 Description" },
  { src: "image2.jpg", alt: "Image 2", text: "Image 2 Description" },
  { src: "image3.jpg", alt: "Image 3", text: "Image 3 Description" },
  { src: "image4.jpg", alt: "Image 4", text: "Image 4 Description" },
];


const LocationDrop = () => {
  return (
    <div className={styles.container}>
      <SingleLocationCard prop={{ name: "Miami", order: "01", img:"he" }} />
      <SingleLocationCard prop={{ name: "Chicago", order: "02", img:"he" }} />
      <SingleLocationCard prop={{ name: "New York", order: "03", img:"he" }} />
      <SingleLocationCard prop={{ name: "California", order: "04", img:"he" }} />
    </div>
  );
};

export default LocationDrop;
