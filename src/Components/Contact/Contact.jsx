import Image from "next/image";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className='px-20 py-10 bg-[#00042a] flex flex-col justify-center items-center wide:flex-row wide:gap-20'>
      <div className="flex wide:w-[70%] flex-col justify-center items-center">
        <h4 className='text-2xl font-bold mb-4'>Take the silk road to</h4>
        <h1 className='text-[2.5rem] text-finding_sec_bold font-bold mb-4 '>
          Digitizing Your Business Growth
        </h1>
      </div>
      <form action='#' className='w-[80%] flex flex-col '>
        <h3 className='text-2xl pl-[20%] wide:text-4xl mb-10'>Start A Conversation With Us</h3>
        <div className=' flex mb-5 border-b-2 text-white border-gray-400 pb-3 gap-4 '>
          <Image src='/SVG/person.svg' width={20} height={20} alt='h' />
          <input
            className='bg-transparent text-white'
            type='text'
            placeholder='Name*'
            required
          />
        </div>
        <div className=' flex mb-5 border-b-2 border-gray-400 pb-3 gap-4'>
          <Image src='/SVG/c_name.svg' width={20} height={20} alt='h' />
          <input
            className='bg-transparent text-white'
            type='text'
            placeholder='Company Name*'
            required
          />
        </div>
        <div className=' flex mb-5 border-b-2 border-gray-400 pb-3 gap-4'>
          <Image src='/SVG/email.svg' width={20} height={20} alt='h' />
          <input
            className='bg-transparent text-white'
            type='email'
            placeholder='Email*'
            required
          />
        </div>

        <div className=' flex mb-5 border-b-2 border-gray-400 pb-3 gap-4'>
          <Image src='/SVG/phone.svg' width={20} height={20} alt='h' />
          <input
            className='bg-transparent text-white'
            type='text'
            placeholder='Phone*'
            required
          />
        </div>
        <div className=' flex justify-start items-start mb-5 border-b-2 border-gray-400 pb-3 gap-4'>
          <Image src='/SVG/y_msg.svg' width={20} height={20} alt='h' />
          <textarea
            rows='5'
            className='bg-transparent w-full outline-none'
            placeholder='Your Message*'
            required
          ></textarea>
        </div>
        <button className="px-10 py-4 mb-5 text-xl hover:text-finding_sec_bold hover:border-finding_sec_bold transition-all border-2" type='submit'>Submit</button>
      </form>

    </div>
  );
};

export default Contact;
