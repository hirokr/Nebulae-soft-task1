import Image from "next/image";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h4>Take the silk road to</h4>
      <h1>Digitizing Your Business Growth</h1>
      <h3>Start A Conversation With Us</h3>
      <form action='#'>
        <div>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <input type='text' placeholder='Name*' required />
        </div>
        <div>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <input type='text' placeholder='Company Name*' required />
        </div>
        <div>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <input type='email' placeholder='Email*' required />
        </div>

        <div>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <input type='text' placeholder='Phone*' required />
        </div>
        <div>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <textarea placeholder='Your Message*' required></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div > 
        <div className={styles.line}></div> 
        <p>Follow us</p>
        <Image src='/linkedin.svg' width={30} height={30} alt='f' />
        <Image src='/instagram.svg' width={30} height={30} alt='f' />
      </div>
    </div>
  );
};

export default Contact;
