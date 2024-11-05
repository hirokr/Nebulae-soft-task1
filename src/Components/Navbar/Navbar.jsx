import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () =>{
  return(
    <div className= {styles.container}>
      <Image src={`/ds-logo.svg`} height={300} width={300} alt='not now' />
    </div>
  )
}


export default Navbar