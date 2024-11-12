import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className=' wide:px-32 bg-gradient-to-r from-[#0c84c8] to-[#018bff] p-10 '>
      <h1 className='text-4xl mb-10 '>Let&apos;s Grow Your Brand </h1>
      <div className=' tracking-tighter grid grid-cols-2 wide:grid-cols-4 gap-10 mb-20 justify-center items-center w-full min-h-[18px] wide:text-lg '>
        <div className='before:h-[100%] h-[22rem] wide:h-[15rem] before:w-[1px] before:bg-finding_sec_bold before:absolute before:left-1 relative flex flex-col gap-2  pl-4 mb-4'>
          <h3 className='text-2xl font-bold mb-3'>Main Services</h3>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
        </div>
        <div className='before:h-[100%] h-[22rem] wide:h-[15rem] before:w-[1px] before:bg-finding_sec_bold before:absolute before:left-1 relative flex flex-col gap-2  pl-4 mb-4'>
          <h3 className='text-2xl font-bold mb-3'>Location Services</h3>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
        </div>
        <div className='before:h-[100%] h-[22rem] wide:h-[15rem] before:w-[1px] before:bg-finding_sec_bold before:absolute before:left-1 relative flex flex-col gap-2  pl-4 mb-4'>
          <h3 className='text-2xl font-bold mb-3'>Apps & Development</h3>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
        </div>
        <div className='before:h-[100%] h-[22rem] wide:h-[15rem] before:w-[1px] before:bg-finding_sec_bold before:absolute before:left-1 relative flex flex-col gap-2  pl-4 mb-4'>
          <h3 className='text-2xl font-bold mb-3'>Company</h3>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-md ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
        </div>
      </div>
      <div className='flex items-center gap-10 mt-20 mb-10'>
        <Image src='/ds-logo.svg' width={200} height={100} alt='h' />
        <div className='h-[2px] w-[100%] bg-finding_sec_bold'></div>
      </div>
      <div className='grid grid-cols-4 text-[.8rem] gap-2 sm:text-[.8em] wide:text-lg'>
        <div className='flex flex-col wide:flex-row wide:items-center wide:gap-5'>
          <h1 className='text-[#289ce7] text-[4rem] sm:text-[4rem] wide:text-[5rem] font-bold  '>
            MI
          </h1>
          <div>
            <h4 className='font-bold'>Miami</h4>
            <p>17975 Collins Avenue</p>
            <p>Sunny Isles Beach,</p>
            <p>FL 33160</p>
          </div>
        </div>

        <div className='flex flex-col wide:flex-row wide:items-center wide:gap-5'>
          <h1 className='text-[#289ce7] text-[4rem] sm:text-[4rem] wide:text-[5rem] font-bold  '>
            MI
          </h1>
          <div>
            <h4 className='font-bold'>Miami</h4>
            <p>17975 Collins Avenue</p>
            <p>Sunny Isles Beach,</p>
            <p>FL 33160</p>
          </div>
        </div>
        <div className='flex flex-col wide:flex-row wide:items-center wide:gap-5 justify-center'>
          <h1 className='text-[#289ce7] text-[4rem] sm:text-[4rem] wide:text-[5rem] font-bold '>
            MI
          </h1>
          <div>
            <h4 className='font-bold'>Miami</h4>
            <p>17975 Collins Avenue</p>
            <p>Sunny Isles Beach,</p>
            <p>FL 33160</p>
          </div>
        </div>
        <div className='flex flex-col wide:flex-row wide:items-center wide:gap-5'>
          <h1 className='text-[#289ce7] text-[4rem] sm:text-[4rem] wide:text-[5rem] font-bold  '>
            MI
          </h1>
          <div>
            <h4 className='font-bold'>Miami</h4>
            <p>17975 Collins Avenue</p>
            <p>Sunny Isles Beach,</p>
            <p>FL 33160</p>
          </div>
        </div>
      </div>
      <div className=' mt-5 h-[1px] w-[100%] bg-finding_sec_bold'></div>
      <footer className='mt-10 flex flex-col wide:flex-row gap-10'>
        <p>&copy;2024 Design Solutions. All rights reserved.</p>

        <p className='hover:underline underline-offset-2'>
          <a href='#'>Privacy Policy</a>
        </p>
        <p className='hover:underline underline-offset-2'>
          <a href='#'>Terms & Conditions</a>
        </p>

        <p>
          Mail us at:{" "}
          <a href='mailto:info@designsolutions.com'>info@designsolutions.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
