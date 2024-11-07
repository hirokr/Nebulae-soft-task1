import Image from 'next/image';
import styles from './DownloadGuid.module.css';

const DownloadGuid = () =>{
  return(
    <div className= {styles.container}>
      <Image
      src="/PNG/downloadBook.png"
      alt='h'
      width={100}
      height={100}
      />
      <h3>DIGITAL TRENDS GUIDE</h3>
      <h1>Download Our 2024 Guide To Growing Brands Online </h1>
      <form action="#">
        <button><span>Download</span><Image
        src="/SVG/down.svg"
        alt='h'
        width={10}
        height={10}
        /></button>
        <input type="email" placeholder='Enter Your Email' />
      </form>
    </div>
  )
}


export default DownloadGuid