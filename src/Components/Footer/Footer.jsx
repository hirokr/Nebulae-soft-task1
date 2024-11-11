import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#0c84c8] to-[#018bff] p-10 '>
      <h1 className='text-4xl mb-2 '>Let&apos;s Grow Your Brand </h1>
      <div className='grid grid-cols-2 wide:grid-cols-4 gap-10 mb-20'>
        <div className='flex flex-col gap-2 border-l-2 pl-4'>
          <h3 className='text-2xl font-bold mb-3'>Main Services</h3>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Custom Web Design
          </a>
        </div>
        <div className='flex flex-col gap-2 border-l-2 pl-4'>
          <h3 className='text-2xl font-bold mb-3'>Location Services</h3>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            NYC Web Design
          </a>
        </div>
        <div className='flex flex-col gap-2 border-l-2 pl-4'>
          <h3 className='text-2xl font-bold mb-3'>Apps & Development</h3>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            Website Cost Calculator
          </a>
        </div>
        <div className='flex flex-col gap-2 border-l-2 pl-4'>
          <h3 className='text-2xl font-bold mb-3'>Company</h3>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
          <a
            className='text-xl ease-in-out transition-all hover:underline hover:underline-offset-4 '
            href='#'
          >
            About Us
          </a>
        </div>
      </div>
      <div className='flex items-center gap-10'>
        <Image src='/ds-logo.svg' width={200} height={100} alt='h' />
        <div className='h-[2px] w-[100%] bg-finding_sec_bold'></div>
      </div>
      <div className='mt-1 grid grid-cols-4'>
        <div>
          <h1 className="text-[#194e72] text-[5rem] font-bold">MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1 className="text-[#194e72] text-[5rem] font-bold ">MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1 className="text-[#194e72] text-[5rem] font-bold">MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
        <div>
          <h1 className="text-[#194e72] text-[5rem] font-bold">MI</h1>
          <h4>Miami</h4>
          <p>17975 Collins Avenue</p>
          <p>Sunny Isles Beach,</p>
          <p>FL 33160</p>
        </div>
      </div>
      <div className=" mt-5 h-[1px] w-[100%] bg-finding_sec_bold"></div>
      <footer className='mt-10 grid grid-cols-1 wide:grid-cols-4 gap-10'>
        <p>&copy;2024 Design Solutions. All rights reserved.</p>

        <p className="underline underline-offset-2">
          <a  href='#'>Privacy Policy</a>
        </p>
        <p className="underline underline-offset-2">
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
