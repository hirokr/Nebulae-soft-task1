import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () =>{
  return(
    <div className= {styles.container}>
      <h1>Let&apos;s Grow Your Brand </h1>
      <div>
        <div className='c1'>
          <h3>Main Services</h3>
            <a href="#">Custom Web Design</a>
            <a href="#">Custom Web Design</a>
            <a href="#">Custom Web Design</a>
            <a href="#">Custom Web Design</a>
            <a href="#">Custom Web Design</a>
        </div>
        <div className='c1'>
          <h3>Location Services</h3>
            <a href="#">NYC Web Design</a>
            <a href="#">NYC Web Design</a>
            <a href="#">NYC Web Design</a>
            <a href="#">NYC Web Design</a>
            <a href="#">NYC Web Design</a>
        </div>
        <div className='c1'>
          <h3>Apps & Development</h3>
            <a href="#">Website Cost Calculator</a>
            <a href="#">Website Cost Calculator</a>
            <a href="#">Website Cost Calculator</a>
            <a href="#">Website Cost Calculator</a>
            <a href="#">Website Cost Calculator</a>
        </div>
        <div className='c1'>
          <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">About Us</a>
            <a href="#">About Us</a>
            <a href="#">About Us</a>
            <a href="#">About Us</a>
        </div>
      </div>
        <Image src="/ds-logo.svg" width={200} height={100} alt='h'/>
      <div>
        <div>
          <h1>MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1>MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1>MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1>MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
      </div>
      <footer>
        <p>&copy;2024 Design Solutions. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
        <p>Mail us at: <a href="mailto:info@designsolutions.com">info@designsolutions.com</a></p>
      </footer>
    </div>
  )
}


export default Footer