import Image from "next/image";
import styles from "./LocationDrop.module.css";
import SingleLocationCard from "./[SingleLocationCard]/SingleLocationCard";

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
